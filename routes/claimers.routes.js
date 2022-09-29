const {Router} = require('express')
const Claimmers = require('../models/claimmers.js')

const router = Router()

router.post('/signup', async (req, res) => {
    const {claimmerName, claimmerLastname, email, password} = req.body

    const newClaimer = await Claimmers.create({
        claimmerName,
        claimmerLastname,
        email,
        password
    })

    console.log(newClaimer)
})


module.exports = router;