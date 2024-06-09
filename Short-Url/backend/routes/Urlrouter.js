const express = require("express");

const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleSearchByShortID,  
  getAllUrls
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURL);
router.get('/analytics/:shortId',handleGetAnalytics);
router.get("/short/:shortId",handleSearchByShortID);
router.get("/all", getAllUrls);
module.exports = router;
