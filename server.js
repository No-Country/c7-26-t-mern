//----------------------------------------------------
//1. Import express and others libraries
//----------------------------------------------------
const express = require("express");
var { expressjwt: ejwt } = require("express-jwt");
const jwt = require("jsonwebtoken");
const helmet = require("helmet");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const db = require("./config/db");
const { response } = require("express");
const APP_PORT = process.env.APP_PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET;

//----------------------------------------------------
//2. Import models
//----------------------------------------------------

const {
  Claimmers,
  Claims,
  Cities,
  Countries,
  Favours,
  Roles,
} = require("./models");

//----------------------------------------------------
//3. Instance of express
//----------------------------------------------------

const app = express();

//----------------------------------------------------
//4.1 Rate limit policy
//----------------------------------------------------

const rateLimitPolicy = rateLimit({
  message: "Try again later",
  max: 10,
  windowMs: 5 * 60 * 1000,
});

//----------------------------------------------------
//4.2 Use all the libraries (express was used before in 2.)
//----------------------------------------------------
app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(cors());

app.use(
  ejwt({
    secret: JWT_SECRET,
    algorithms: ["HS256"],
  }).unless({ path: ["/login"] })
);

//----------------------------------------------------
//4.3 Import services
//----------------------------------------------------

//----------------------------------------------------
//4.4 Import controlers
//----------------------------------------------------

const claimmerVerification = require("./controlers/claimmerVerification");

//----------------------------------------------------
//5. ENDPOINTS OR PATHS
//----------------------------------------------------

//----------------------------------------------------
//5.1 SIGN UP & LOG IN:
//----------------------------------------------------

app.post("/login", async (req, res) => {
  const { claimmerName, password } = req.body;
  console.log(claimmerName, password);
  const posibleClaimmer = await Claimmers.findOne({
    attributes: ["id", "claimmerName", "email"],
    where: {
      claimmerName,
      password,
    },
    include: [{ model: Roles }],
  });
  console.log(posibleClaimmer);
  if (posibleClaimmer == null) {
    res.status(401).json({ error: "user or password incorrect" });
  } else {
    const token = jwt.sign(
      {
        posibleClaimmer,
      },
      JWT_SECRET,
      { expiresIn: "60m" }
    );
    res.json({
      token,
      idClaimmer: posibleClaimmer.id,
      rol: posibleClaimmer.role.dataValues.roleName,
      path: "/home"
    });
  }
  //Pushear id de usuario a localstorage para obtenerlo en el front y traer los contactos de este idusuario. (AXIOS)
});

//----------------------------------------------------
//5.2: CLAIMMERS
//----------------------------------------------------

app.get("/claimmers/dashboard", claimmerVerification, async (req, res) => {
  try {
    const claimmers = await db.query("SELECT * FROM claimmers", {
      type: db.QueryTypes.SELECT,
    });
    res.status(200).json(claimmers);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: "Please try again in a few minutes" });
  }
});

app.get("/claimmer/dashboard/:claimmerId", claimmerVerification, async (req, res) => {
  try {
    const claimmers = await db.query(
      `SELECT * FROM claimmers WHERE id = "${req.params.claimmerId}
"`,
      { type: db.QueryTypes.SELECT }
    );
    res.status(200).json(claimmers);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: "Please try again in a few minutes" });
  }
});

app.put("/claimmer/changes/:idClaimmer", claimmerVerification, async (req, res) => {
  const idClaimmer = req.params.idClaimmer;
  const claimmerName = req.body.claimmerName;
  const claimmerLastname = req.body.claimmerLastname;
  const email = req.body.email;
  const password = req.body.password;
  const rePassword = req.body.rePassword;
  const DNI = req.body.DNI;
  try {
    const claimmer = await db.query(
      //NUNCA PERO NUUUNCA usar variables dentro de las consultas de SQL
      "UPDATE claimmers SET claimmerName = :claimmerName, claimmerLastname = :claimmerLastname, email = :email, password = :password, rePassword= :rePassword, DNI= :DNI WHERE id= :idClaimmer",
      {
        replacements: {
          idClaimmer: idClaimmer,
          claimmerName: claimmerName,
          claimmerLastname: claimmerLastname,
          email: email,
          password: password,
          rePassword: rePassword,
          DNI: DNI,
        },
      }
    );
    res.status(200).json(claimmer);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: "Please try again in a few minutes" });
  }
});

app.delete("/claimmer/delete/:idClaimmer", claimmerVerification, async (req, res) => {
  const idClaimmer = req.params.idClaimmer;
  console.log(req.params);
  db.models.claimmers
    .destroy({
      where: {
        id: idClaimmer,
      },
    })
    .then((record) => {
      console.log(record);
      if (record >= 1) {
        res.status(200).json({ message: "User was deleted successfully" });
      } else {
        res.status(404).json({ message: "record not found" });
      }
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
});



//----------------------------------------------------
//5.3: COUNTRIES
//----------------------------------------------------

//----------------------------------------------------
//5.4: CITIES
//----------------------------------------------------

//----------------------------------------------------
//5.5: FAVOURS
//----------------------------------------------------

//----------------------------------------------------
//5.6: CLAIMS
//----------------------------------------------------

app.get("/claims", claimmerVerification, async (req, res) => {
  try {
    const claims = await db.query("SELECT * FROM claims", {
      type: db.QueryTypes.SELECT,
    });
    res.status(200).json(claims);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: "Please try again in a few minutes" });
  }
});

//----------------------------------------------------
//6. PUT THE SERVER ON
//----------------------------------------------------
app.listen(APP_PORT, () => {
  console.log(`escuchando en puerto ${APP_PORT}`);
});
