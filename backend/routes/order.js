const express = require('express');
const router = express.Router();
const { isAuthenticatedUser, isInRole } = require("../middleware/authentication");

const { createOrder, getOrders, getOrder, getMyOrders, getUserOrders } = require('../controllers/orderController');

router.route("/order/create").post(isAuthenticatedUser, createOrder);
router.route("/orders").post(isAuthenticatedUser, getOrders);
router.route("/order/:id").post(isAuthenticatedUser, getOrder);
router.route("/orders/mine").post(isAuthenticatedUser, getMyOrders);
router.route("/orders/:id").post(isAuthenticatedUser, getMyOrders);


module.exports = router;