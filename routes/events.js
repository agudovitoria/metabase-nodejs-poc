const express = require("express");
const router = express.Router();

const Event = require("../persistence/models/Event");

router.post("/:eventName", (req, res, next) => {
  console.log(req.params);
  Event.create({
    name: 'event',
    value: req.params.eventName,
    timestamp: new Date()
  })
  .then(() => res.status(200));
});

module.exports = router;
