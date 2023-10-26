const express = require('express');
const router = express.Router();
const { isAuthenticatedUser, isInRole } = require("../middleware/authentication");
const { createCategory, getCategories, updateCategory, deleteCategory } = require('../controllers/categoryController');

const multer = require("multer");
const {v4:uuidv4} = require("uuid")
const path = require("path")
const bcrypt = require("bcrypt")
const md5 = require("blueimp-md5")

const productStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        return cb(null, "public/images/categories")
    },
    filename: function(req, file, cb) {
        const pathName = md5(`${uuidv4()}_${Date.now()}`) + path.extname(file.originalname)
        return cb(null, pathName)
    }
})

const uploadCategoryPicture = multer({storage: productStorage})


router.route("/category/create").post(isAuthenticatedUser, uploadCategoryPicture.single("categoryImage"), createCategory);
router.route("/category/update/:id").put(isAuthenticatedUser, uploadCategoryPicture.single("categoryImage"), updateCategory);
router.route("/category/delete/:id").delete(isAuthenticatedUser, deleteCategory);
router.route("/category/getAll/").get(getCategories);


module.exports = router;