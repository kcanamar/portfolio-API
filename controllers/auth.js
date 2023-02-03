////////////////////////
// Setup - Import deps
////////////////////////
const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()

///////////////////////
// Exports
///////////////////////
module.exports = {
    signup,
    login,
    logout
}
///////////////////////
// Routes
///////////////////////
async function signup(req, res) {
    try {
        // // encrypt by hasing password
        // req.body.password = await bcrypt.hash(
        //     req.body.password, 
        //     await bcrypt.genSalt(10)
        // )
        // // generate the user
        // await User.create(req.body)
        // // response
        // res.json({status: 'User Created'})
    } catch (err) {
        res.status(400).json({err})
    }
}

async function login(req, res) {
    try {
        // destructure req.body
        const {username, password} = req.body
        // get user
        const user = await User.findOne({username})
        // condtional does user exist
        if (user){
            // check the password
            const passwordCheck = await bcrypt.compare(password, user.password)
            if (passwordCheck){
                // remove password from user data
                const userData = { username }
                // sign token
                const token = await jwt.sign(userData, process.env.SECRET)
                // respond with token, httpOnly prevents frontend from touching the token, send json with user data
                res
                .cookie("token", token, { httpOnly: true })
                .json({userData, status: "logged in"})
            } else {
                res.status(400).json({error: "Password doesn't match"})
            }
        } else {
            res.status(400).json({error: "User does not exist"})
        }
    } catch (err) {
        res.status(400).json({err})
    }
}

async function logout(req, res) {
    // destroy cookie
    res.clearCookie("token").json({ status: "logged out"})
}