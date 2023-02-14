// * Setup - Import deps 
////////////////////////
const mongoose = require("mongoose")

//////////////////////
// * Schemas
//////////////////////
const talentSchema = new mongoose.Schema({
    title: String,
    desc: String,
    link: String,
    icon: String
})

//////////////////////
// * Models
//////////////////////
const Talent = mongoose.model("Talent", talentSchema)

///////////////////////
// * Export
///////////////////////
module.exports =  Talent