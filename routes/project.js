////////////////////////
// Setup - Import deps
////////////////////////
const express = require('express')
const router = express.Router()
const projectCtrl = require('../controllers/project')
///////////////////////
// Declare Routes and Routers 
///////////////////////
router.get("/", projectCtrl.index)
router.get("/:id", projectCtrl.show)
router.post("/:id", projectCtrl.create)
router.put("/:id", projectCtrl.update)
router.delete("/:id", projectCtrl.delete)
///////////////////////
// Exports
///////////////////////
module.exports = router