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
        res.json(err)
    }
}
// Create
async function create(req, res) {
    try {
        res.json( await About.create(req.body))
    } catch (err) {
        res.json(err)
    }
}
// Update
async function update(req, res) {
    try {
        await About.findByIdAndUpdate(req.params.id, req.body)
        res.json(await About.findById(req.params.id))
    } catch (err) {
        res.json(err)
    }
}
// Delete
async function deleteAbout(req, res) {
    try {
        await About.findByIdAndDelete(req.params.id)
        res.json(await About.find({}).populate("projects"))
    } catch (err) {
        res.json(err)
    }
}
// Show
async function show(res, req) {
    try {
        res.json(await About.findById(req.params.id).populate("projects"))
    } catch (err) {
        res.json(err)
    }
}