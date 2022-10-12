
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const claimmerVerification = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {

        res.status(401).json({ Error: "Token Invalido" });


    } else {

        const verificar = jwt.verify(token, JWT_SECRET)

        if (verificar.posibleClaimmer.role.id == 1) { next(); }
        else { res.status(401).json({ Error: "No es claimmer" }); }

    }

}

module.exports = claimmerVerification;