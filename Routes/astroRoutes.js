const express = require("express");

const astroController = require("../Controllers/astrolegerController");

const router = express.Router();

// Routers to make different requests
router.post("/search", astroController.search);
router.post("/addAstroDetails", astroController.insertData);
router.post("/filterBy", astroController.filterData);
router.post("/sortByExperience", astroController.sortByExperience);
router.post("/sortByCharge", astroController.sortByCharge);

module.exports = router;
