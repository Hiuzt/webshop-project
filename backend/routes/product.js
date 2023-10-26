const express = require('express');
const router = express.Router();
const { isAuthenticatedUser, isInRole } = require("../middleware/authentication");
const { getProducts, getProduct, createProduct, deleteProduct, updateProduct, getProductsByCategory, createReview, getReviews } = require('../controllers/productController');

const multer = require("multer");
const {v4:uuidv4} = require("uuid")
const path = require("path")
const bcrypt = require("bcrypt")
const md5 = require("blueimp-md5")

const productStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        return cb(null, "public/images/products")
    },
    filename: function(req, file, cb) {
        const pathName = md5(`${uuidv4()}_${Date.now()}`) + path.extname(file.originalname)
        return cb(null, pathName)
    }
})

const updateImages = multer({storage: productStorage})


router.route("/products").get(getProducts);
router.route("/product/category/:category").get(getProductsByCategory);
router.route("/product/:id").get(getProduct).put(isAuthenticatedUser, isInRole("admin", "developer", "employee"), updateProduct)
router.route("/product/update/:id").put(isAuthenticatedUser, isInRole("admin", "developer", "employee"), updateProduct)
router.route("/product/delete/:id").delete(isAuthenticatedUser, isInRole("admin", "developer", "employee"), deleteProduct)
router.route("/product/create").post(isAuthenticatedUser, updateImages.array("images", 12), isInRole("admin", "developer", "employee"), createProduct)
router.route("/review/create/:id").put(isAuthenticatedUser, createReview)
router.route("/reviews/:id").get(getReviews)




module.exports = router;