const express = require("express");
const {insertDonation} = require("../controllers/donateController")
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();

router.use(requireAuth)
router.post("/insertDonation",insertDonation);

module.exports = router;