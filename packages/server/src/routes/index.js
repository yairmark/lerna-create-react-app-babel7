import express from  'express';
import { FOO } from "@yourproject/common/src/const";
const router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
