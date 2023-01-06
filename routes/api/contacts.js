const express = require("express");
const router = express.Router();
const ctrlContact = require("../../controller/index");
const { authenticate } = require("../../middlewares");

router.get("/", authenticate, ctrlContact.get);

router.get("/:id", authenticate, ctrlContact.getById);

router.post("/", authenticate, ctrlContact.create);

router.put("/:id", authenticate, ctrlContact.update);

router.delete("/:id", authenticate, ctrlContact.remove);

router.patch("/:id/favourite", authenticate, ctrlContact.updateStatus);

module.exports = router;
