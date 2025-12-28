const express = require("express");
const router = require("express").Router();

const testController = require("../controllers/test.controller");

router.get("/test", testController.test);
router.get("/test", (req, res) => {
  res.json({ message: "Frontend connected successfully" });
});
module.exports = router;
