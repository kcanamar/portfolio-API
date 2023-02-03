////////////////////////
// Setup - Import deps
////////////////////////
const express = require('express')
const router = express.Router()
const aboutCtrl = require('../controllers/about')
const isAuthed = require("../utils/isAuthed")
///////////////////////
// Declare Routes and Routers 
///////////////////////
router.get("/", aboutCtrl.index)
router.get("/:id", aboutCtrl.show)
router.post("/", isAuthed, aboutCtrl.create)
router.put("/:id", isAuthed, aboutCtrl.update)
router.delete("/:id", isAuthed, aboutCtrl.delete)
///////////////////////
// Exports
///////////////////////
module.exports = router