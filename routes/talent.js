////////////////////////
// Setup - Import deps
////////////////////////
const express = require('express')
const router = express.Router()
const talentCtrl = require('../controllers/talent')
const isAuthed = require("../utils/isAuthed")

///////////////////////
// Declare Routes and Routers 
///////////////////////
router.get("/", talentCtrl.index)
router.get("/:id", talentCtrl.show)
router.post("/", isAuthed, talentCtrl.create)
router.put("/:id", isAuthed, talentCtrl.update)
router.delete("/:id", isAuthed, talentCtrl.delete)
///////////////////////
// Exports
///////////////////////
module.exports = router