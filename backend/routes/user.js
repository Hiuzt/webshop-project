const express = require('express');
const router = express.Router();
const { isAuthenticatedUser, isInRole } = require("../middleware/authentication");
const { isAuthorizedRole } = require("../middleware/authorization");
const { getUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/userController');
const multer = require("multer");
const {v4:uuidv4} = require("uuid")
const path = require("path")
const bcrypt = require("bcrypt")
const md5 = require("blueimp-md5")

const profileStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        return cb(null, "public/images/profiles")
    },
    filename: function(req, file, cb) {
        const pathName = md5(`${uuidv4()}_${Date.now()}`) + path.extname(file.originalname)
        return cb(null, pathName)
    }
})

const uploadProfilePicture = multer({storage: profileStorage})

// router.route("/users").get(isAuthenticatedUser, isInRole("admin", "developer"), getUsers);
router.route("/users").get(isAuthenticatedUser, isAuthorizedRole("view_acp"), getUsers);
router.route("/user/create").post(isAuthenticatedUser, isInRole("admin", "developer"), createUser);
router.route("/user/:id")
    .get(isAuthenticatedUser, isInRole("admin", "developer"), getUser)
    .put(isAuthenticatedUser, uploadProfilePicture.single("profilePicture"), updateUser)
    .delete(isAuthenticatedUser, isInRole("admin", "developer"), deleteUser);


module.exports = router;