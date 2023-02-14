// * Dependencies
////////////////// *
require("dotenv").config()
require("./config/db")
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const corsOptions = require("./config/cors")
const authRouter = require("./routes/auth")
const aboutRouter = require("./routes/about")
const projectRouter = require("./routes/project")
const talentRouter = require('./routes/talent')
const PORT = process.env.PORT || 3001
const app = express()

// * Middleware
////////////////// *
app.use(morgan("dev"))
app.use(cors(corsOptions))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// * Routes/ Routers
////////////////// *
app.get("/", (req, res) => {
    // send json reponse
    res.json({
        response: "visit the github repo to learn how to use this api at https://github.com/kcanamar/portfolio-API"
    })
})
// * Authentication Router
////////////////// *
app.use("/auth", authRouter)

// * routes for CRUD on About & Project models
////////////////// *
app.use("/api/about", aboutRouter)
app.use("/api/projects", projectRouter)
app.use("/api/talents", talentRouter)


// * Server Listener
////////////////// *
app.listen(PORT, () => console.log(`Listening to Kyle Canamar's memoir... PORT:${PORT}`))