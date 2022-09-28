//----------------------------------------------------
//1. Import express and others libraries
//----------------------------------------------------
const express = require("express");
const expressJwt = require("express-jwt");
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

// app.use(
//   expressJwt({
//     secret: JWT_SECRET,
//     algorithms: ["HS256"],
//   }).unless({ path: ["/login"] })
// );

//----------------------------------------------------
//4.3 Import services
//----------------------------------------------------

//----------------------------------------------------
//4.4 Import controlers
//----------------------------------------------------

//----------------------------------------------------
//5. ENDPOINTS OR PATHS
//----------------------------------------------------

//----------------------------------------------------
//5.1 SIGN UP & LOG IN:
//----------------------------------------------------

app.post("/login", async (req, res) => {
  const { name, password } = req.body;
  // console.log(name, password);
  const posibleUser = await User.findOne({
    attributes: ["id", "name", "email"],
    where: {
      name,
      password,
    },
    include: [{ model: Rol }],
  });
  console.log(posibleUser.rol.dataValues.id);
  if (posibleUser == null) {
    res.status(401).json({ error: "user or password incorrect" });
  } else {
    const token = jwt.sign(
      {
        posibleUser,
      },
      JWT_SECRET,
      { expiresIn: "60m" }
    );
    res.json({ token, id: posibleUser.id, rol: posibleUser.rol.dataValues.id });
  }
  //Pushear id de usuario a localstorage para obtenerlo en el front y traer los contactos de este idusuario. (AXIOS)
});

app.post("/signup", adminVerification, async (req, res) => {
  try {
    const newUser = await db.query(
      "INSERT INTO userTable (name, lastname, email, password, rePassword, profile, rolId) values (?,?,?,?,?,?,?)",
      //establecer rol
      {
        type: db.QueryTypes.INSERT,
        replacements: [
          req.body.name,
          req.body.lastname,
          req.body.email,
          req.body.password,
          req.body.rePassword,
          req.body.profile,
          req.body.rol,
        ],
      }
    );
    res.status(200).json(newUser);
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
