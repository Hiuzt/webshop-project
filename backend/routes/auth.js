const express = require("express");
const router = express.Router();

const { register, login, loginAdmin, logout, verify, forgotPassword, resetPassword, changePassword, loginStatus } = require("../controllers/authController");
const { isAuthenticatedUser, isInRole } = require("../middleware/authentication");

router.route("/auth/register").post(register);
router.route("/auth/loggedin").get(loginStatus);
router.route("/auth/login").post(login);
router.route("/auth/logout").get(logout);
router.route("/auth/verify/:token").get(verify)
router.route("/auth/login/admin").post(loginAdmin);
router.route("/auth/password/forgot").post(forgotPassword);
router.route("/auth/password/reset/:token").put(resetPassword); // Rese password, without knowing old one
router.route("/auth/password/change").post(changePassword); // Change password - requires old password

module.exports = router;
