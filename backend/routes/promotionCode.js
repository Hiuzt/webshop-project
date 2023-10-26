const express = require("express");
const router = express.Router();

const { getPromotionCodes, getPromotionCode, createPromotionCode, updatePromotionCode, deletePromotionCode } = require("../controllers/promotionCodeController");
const { isAuthenticatedUser, isInRole } = require("../middleware/authentication");

router.route("/promotionCodes/").get(isAuthenticatedUser, getPromotionCodes);
router.route("/promotionCode/:id").get(isAuthenticatedUser, getPromotionCode);
router.route("/promotionCode/create").post(isAuthenticatedUser, createPromotionCode);
router.route("/promotionCode/update/:id").put(isAuthenticatedUser, updatePromotionCode);
router.route("/promotionCode/delete").delete(isAuthenticatedUser, deletePromotionCode)


module.exports = router;
