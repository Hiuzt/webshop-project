const express = require("express");
const router = express.Router();

const { getRoles, getRole, createRole, updateRole, deleteRole } = require("../controllers/roleController");
const { isAuthenticatedUser, isInRole } = require("../middleware/authentication");

router.route("/roles/").get(isAuthenticatedUser, getRoles);
router.route("/role/:id").get(isAuthenticatedUser, getRole);
router.route("/role/create").post(isAuthenticatedUser, createRole);
router.route("/role/update/:id").put(isAuthenticatedUser, updateRole);
router.route("/role/delete/:id").delete(isAuthenticatedUser, deleteRole)


module.exports = router;
