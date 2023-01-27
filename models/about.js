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
    git: String
})

const aboutSchema = new mongoose.Schema({
    name: String,
    email: String,
    linked: String,
    tweet: String,
    git: String,
    blog: String,
    bio: String,
    age: Number,
    projects: [
        {type: mongoose.Types.ObjectId, ref: "Project"}
    ],
    tech: [],
    portfolios: []
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