////////////////////////
// Setup - Import deps
////////////////////////
const express = require('express')
const router = express.Router()
const projectCtrl = require('../controllers/project')
const isAuthed = require("../utils/isAuthed")

///////////////////////
// Declare Routes and Routers 
///////////////////////
router.get("/", projectCtrl.index)
router.get("/:id", projectCtrl.show)
router.post("/:id", isAuthed, projectCtrl.create)
router.put("/:id", isAuthed, projectCtrl.update)
router.delete("/:id", isAuthed, projectCtrl.delete)
///////////////////////
// Exports
///////////////////////
module.exports = router