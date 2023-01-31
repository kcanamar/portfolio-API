////////////////////////
// * Setup - Import deps 
////////////////////////
const mongoose = require("mongoose")

//////////////////////
// * Schemas
//////////////////////
const projectSchema = new mongoose.Schema({
    image: String,
    name: String,
    live: String,
    git: String,
    stack: []
})

const aboutSchema = new mongoose.Schema({
    name: String,
    email: String,
    linked: String,
    git: String,
    twitter: String,
    blog: String,
    bio: String,
    age: Number,
    projects: [
        {type: mongoose.Types.ObjectId, ref: "Project"}
    ],
})

//////////////////////
// * Models
//////////////////////
const About = mongoose.model("About", aboutSchema)
const Project = mongoose.model("Project", projectSchema)

///////////////////////
// * Export
///////////////////////
module.exports = { About, Project }