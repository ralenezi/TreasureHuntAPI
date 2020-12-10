const express = require("express");
const {
  randomController,
  treasureController,
  thingCreate,
} = require("./controllers");

const router = express.Router();

router.get("/random", randomController);

router.get("/treasure", treasureController);

router.post("/", thingCreate);

module.exports = router;
