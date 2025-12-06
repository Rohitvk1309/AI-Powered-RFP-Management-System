const express = require("express");
const router = express.Router();

const rfpController = require("../controllers/rfpController");

router.post("/", rfpController.createRfp);
router.get("/", rfpController.getAllRfps);
router.get("/:id", rfpController.getRfpById);
router.post("/:id/send", rfpController.sendRfpToVendors);

module.exports = router;
