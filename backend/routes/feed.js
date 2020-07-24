var express = require("express");
var router = express.Router();
var feedController = require("../controllers/feed");
/* GET home page. */
router.get("/", feedController.getAllFeeds);

module.exports = router;
