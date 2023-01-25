// * Dependencies
////////////////// *
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const PORT = process.env.PORT || 3001
const app = express()

// * Middleware
////////////////// *
app.use(morgan("dev"))

// * Routes/ Routers
////////////////// *
app.get("/", (req, res) => {
    res.json({
        response: "Working"
    })
})
// * Server Listener
////////////////// *
app.listen(PORT, () => console.log(`Listening to Kyle Canamar's memoir... PORT:${PORT}`))