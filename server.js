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

app.put("/about/:id", async (req, res) => {
    // find and update about 
    await About.findByIdAndUpdate(req.params.id, req.body)
    res.json(await About.findById(req.params.id))
})

app.delete("/about/:id", async (req, res) => {
    await About.findByIdAndDelete(req.params.id)
    res.json(await About.find({}).populate("projects"))
})

app.get("/about/:id", async (req, res) => {
    res.json(await About.findById(req.params.id).populate("projects"))
})
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

app.get("/projects", async (req, res) => {
    res.json(await Project.find({}))
})


app.put("/project/:projectid", async (req, res) => {
    await Project.findByIdAndUpdate(req.params.projectid, req.body)
    res.json(await Project.findById(req.params.projectid))
})
// todo DELETE project
app.get("/project/:projectid", async (req, res) => {
    res.json(await Project.findById(req.params.projectid))
})


// * Server Listener
////////////////// *
app.listen(PORT, () => console.log(`Listening to Kyle Canamar's memoir... PORT:${PORT}`))