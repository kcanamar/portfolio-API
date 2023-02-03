////////////////////////
// Setup - Imports
////////////////////////
const router = require('express').Router()
const authCtrl = require("../controllers/auth")
///////////////////////
// Declare Router and Routes
///////////////////////

router.post("/signup", authCtrl.signup)
router.post("/login", authCtrl.login)
router.post("/logout", authCtrl.logout)

///////////////////////
// Exports
///////////////////////
module.exports = router