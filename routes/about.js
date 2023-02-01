////////////////////////
// Setup - Import deps
////////////////////////
const express = require('express')
const router = express.Router()
const aboutCtrl = require('../controllers/about')
///////////////////////
// Declare Routes and Routers 
///////////////////////
router.get("/", aboutCtrl.index)
router.get("/:id", aboutCtrl.show)
router.post("/", aboutCtrl.create)
router.put("/:id", aboutCtrl.update)
router.delete("/:id", aboutCtrl.delete)
///////////////////////
// Exports
///////////////////////
module.exports = router