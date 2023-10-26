const express = require('express');
const router = express.Router();
const { isAuthenticatedUser, isInRole } = require("../middleware/authentication");


router.route("/reviews/:id").get(getProductReviews);
router.route("/reviews/create").post(isAuthenticatedUser, createReview)


module.exports = router;