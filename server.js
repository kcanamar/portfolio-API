// * Dependencies
////////////////// *
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const PORT = process.env.PORT || 3001
const app = express()
const projects = require("./projects.json")
const about = require("./about.json")
// * Middleware
////////////////// *
app.use(morgan("dev"))
app.use(cors())

// * Routes/ Routers
////////////////// *
app.get("/", (req, res) => {
    // send json reponse
    res.json({
        response: "/about or /projects for content"
    })
})

app.get("/about", (req, res) => {
    // send about via JSON
    res.json(about)
})

app.get("/projects", (req, res) => {
    // send project via JSON
    res.json(projects)
})

// * Server Listener
////////////////// *
app.listen(PORT, () => console.log(`Listening to Kyle Canamar's memoir... PORT:${PORT}`))