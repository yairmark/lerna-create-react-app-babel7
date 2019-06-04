import express from "express";
import { FOO } from "@yourproject/common/src/const";

const router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send(`respond with a resource: [${FOO}]`);
});

module.exports = router;
