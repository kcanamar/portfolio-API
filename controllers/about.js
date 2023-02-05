////////////////////////
// Setup - Import deps
////////////////////////
const { About } = require('../models/about.js');
///////////////////////
// Exports
///////////////////////

module.exports = {
    create,
    show,
    index,
    update,
    delete: deleteAbout,
};
///////////////////////
// Declare Routes 
///////////////////////
// Index
async function index(req, res) {
    try {
        res.json(await About.find({}).populate("projects"))
    } catch (err) {
        res.status(400).json({err})
    }
}
// Create
async function create(req, res) {
    try {
        res.json( await About.create(req.body))
    } catch (err) {
        res.status(400).json({err})
    }
}
// Update
async function update(req, res) {
    try {
        await About.findByIdAndUpdate(req.params.id, req.body)
        res.json(await About.findById(req.params.id))
    } catch (err) {
        res.status(400).json({err})
    }
}
// Delete
async function deleteAbout(req, res) {
    try {
        await About.findByIdAndDelete(req.params.id)
        res.json(await About.find({}).populate("projects"))
    } catch (err) {
        res.status(400).json({err})
    }
}
// Show
async function show(req, res) {
    try {
        const data = await About.findById(req.params.id).populate("projects")
        res.json(data)
    } catch (err) {
        res.status(400).json({err})
    }
}