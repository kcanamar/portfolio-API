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
// * Custom Methods
///////////////////////

About.associate = async (aboutid, projectid) => {
    // get the targeted about
    const about = await About.findById(aboutid)
    // get the targeted project
    const project = await Project.findById(projectid)
    // access the found about's projects array, and push the found project
    about.projects.push(project)
    // call the .save method to save changes
    about.save()
    // show the changes made
    return { about , project }
}
///////////////////////
// * Export
///////////////////////
module.exports = { About, Project }