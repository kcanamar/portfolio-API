////////////////////////
// Setup - Import deps
////////////////////////
const Talent = require('../models/talent.js');
///////////////////////
// Exports
///////////////////////

module.exports = {
    create,
    show,
    index,
    update,
    delete: deleteTalent,
};
///////////////////////
// Declare Routes 
///////////////////////
// Index
async function index(req, res) {
    try {
        res.json(await Talent.find({}))
    } catch (err) {
        res.status(400).json({err})
    }
}
// Create
async function create(req, res) {
    try {
        res.json( await Talent.create(req.body))
    } catch (err) {
        res.status(400).json({err})
    }
}
// Update
async function update(req, res) {
    try {
        await Talent.findByIdAndUpdate(req.params.id, req.body)
        res.json(await Talent.findById(req.params.id))
    } catch (err) {
        res.status(400).json({err})
    }
}
// Delete
async function deleteTalent(req, res) {
    try {
        await Talent.findByIdAndDelete(req.params.id)
        res.json(await Talent.find({}))
    } catch (err) {
        res.status(400).json({err})
    }
}
// Show
async function show(req, res) {
    try {
        const data = await Talent.findById(req.params.id)
        res.json(data)
    } catch (err) {
        res.status(400).json({err})
    }
}