////////////////////////
// Setup 
////////////////////////
const jwt = require('jsonwebtoken')
require('dotenv').config()

async function isAuthed(req, res, next) {
    try {
        // check if token is in the cookie, else explicitly set token to false
        const token = req.cookies.token || false
        if(token){
            // verify token
            const payload = await jwt.verify(token, process.env.SECRET)
            // attach payload to request
            req.payload = payload
            // allow access
            next()
        } else {
            res.status(400).json({status: "Not logged in"})
        }
    } catch (error) {
        res.status(400).json({error, status: "You are not authorized"})
    }
}
///////////////////////
// Exports
///////////////////////
module.exports = isAuthed