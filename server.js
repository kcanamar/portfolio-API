// * Dependencies
////////////////// *
require("dotenv").config()
require("./config/db")
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const aboutRouter = require("./routes/about")
const projectRouter = require("./routes/project")
const PORT = process.env.PORT || 3001
const app = express()

// * Middleware
////////////////// *
app.use(morgan("dev"))
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// * Routes/ Routers
////////////////// *
app.get("/", (req, res) => {
    // send json reponse
    res.json({
        response: "/api/about or /api/projects for content"
    })
})
// * routes for CRUD on About & Project models
////////////////// *
app.use("/api/about", aboutRouter)
app.use("/api/projects", projectRouter)


// * Server Listener
////////////////// *
app.listen(PORT, () => console.log(`Listening to Kyle Canamar's memoir... PORT:${PORT}`))