// * Dependencies
////////////////// *
require("dotenv").config()
require("./config/db")
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const PORT = process.env.PORT || 3001
const app = express()
const projects = require("./projects.json")
const about = require("./about.json")
const { About, Project } = require("./models/about")

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
app.get("/api/about", (req, res) => {
    // send about via JSON
    res.json(about)
})
app.get("/api/projects", (req, res) => {
    // send project via JSON
    res.json(projects)
})

// * routes for CRUD on About & Project models
////////////////// *
app.get("/about", async (req, res) => {
    // populate projects array w/ refs
    const abouts = await About.find({}).populate("projects")
    res.json(abouts)
})

app.post("/about", async (req, res) => {
    res.json( await About.create(req.body))
})
// todo PUT about
// todo DELETE about

app.post("/project/:aboutid", async (req, res) => {
    // find aboutid
    const about = await About.findById(req.params.aboutid)
    // create new project
    const project = await Project.create(req.body)
    // push new project to about.projects
    about.projects.push(project)
    // call .save
    about.save()
    // confirm
    res.json(about)
})
// todo GET projects

// todo PUT project
// todo DELETE project
// todo GET tech
// todo PUT tech
// todo DELETE tech
// todo GET portfolios
// todo PUT portfolios
// todo DELETE portfolio

// * Server Listener
////////////////// *
app.listen(PORT, () => console.log(`Listening to Kyle Canamar's memoir... PORT:${PORT}`))