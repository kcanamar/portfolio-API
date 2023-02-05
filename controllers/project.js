////////////////////////
// Setup - Import deps
////////////////////////
const { About, Project } = require('../models/about.js');
///////////////////////
// Exports
///////////////////////

module.exports = {
    create,
    show,
    index,
    update,
    delete: deleteProject,
};
///////////////////////
// Declare Routes 
///////////////////////
// Index
async function index(req, res) {
    try {
        res.json(await Project.find({}))
    } catch (err) {
        res.status(400).json({err})
    }
}
// Create
async function create(req, res) {
    try {
        const about = await About.findById(req.params.id)
        const project = await Project.create(req.body)
        about.projects.push(project)
        about.save()
        res.json(about)
    } catch (err) {
        res.status(400).json({err})
    }
}
// Update
async function update(req, res) {
    try {
        await Project.findByIdAndUpdate(req.params.id, req.body)
        res.json(await Project.findById(req.params.id))
    } catch (err) {
        res.status(400).json({err})
    }
}
// Delete
async function deleteProject(req, res) {
    try {
        await Project.findByIdAndDelete(req.params.id)
        res.json(await Project.find({}))
    } catch (err) {
        res.status(400).json({err})
    }
}
// Show
async function show(req, res) {
    try {
        res.json(await Project.findById(req.params.id))
    } catch (err) {
        res.status(400).json({err})
    }
}