const express = require("express");
const router = express.Router();
console.log("TEST ROUTES FILE LOADED");
const testController = require("../controllers/test.controller");

router.get("/test", testController.test);

module.exports = router;
