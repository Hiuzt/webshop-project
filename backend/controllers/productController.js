const Product = require("../models/product");
const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");
const CatchAsyncHandler = require("../middleware/catchAsyncErrors");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.getProducts = CatchAsyncHandler( async (request, response, next) => {
    const products = await Product.find();
    const fullUrl = request.protocol + '://' + request.get('host') + "/";
    products.forEach((productSource, productIndex) => {
        productSource.images.forEach((imageSource, imageIndex) => {
            productSource.images[imageIndex].src = `${fullUrl}images/products/${imageSource.src}`
        })
        
    })
  
    response.status(200).json({
        success: true,
        products
    });
});

exports.getProductsByCategory = CatchAsyncHandler( async (request, response, next) => {
    const products = await Product.find({category: request.params.category});
    const fullUrl = request.protocol + '://' + request.get('host') + "/";
    products.forEach((productSource, productIndex) => {
        productSource.images.forEach((imageSource, imageIndex) => {
            productSource.images[imageIndex].src = `${fullUrl}images/products/${imageSource.src}`
        })
        
    })
    response.status(200).json({
        success: true,
        products
    });
});

exports.getProduct = CatchAsyncHandler( async (request, response, next) => {
    const product = await Product.findById(request.params.id);
    const fullUrl = request.protocol + '://' + request.get('host') + "/";
    
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }
	product?.images?.forEach((imageSource, imageIndex) => {
		product.images[imageIndex].src = `${fullUrl}images/products/${imageSource.src}`
	})
	
	console.log(product)
	
    response.status(201).json({
        success: true,
        product
    });
});



exports.createProduct = CatchAsyncHandler(async (request, response, next) => {
    let newArray = []
    if (request.files !== undefined ) {
        request.files.forEach((fileSource, fileIndex) => {
            newArray.push({src: fileSource.filename})
        })
    }


    request.body.images = newArray


    console.log(request.body)
    const product = await Product.create(request.body);

    response.status(201).json({
        success: true,
        product
    });

    response.status(201).json({msg: "OK"})
});

exports.deleteProduct = CatchAsyncHandler(async (request, response, next) => {
    const product = await Product.findById(request.params.id) ;

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    product.deleteOne();

    response.status(200).json({
        success: true,
        message: "Product successfully deleted"
    });
})

exports.updateProduct = CatchAsyncHandler(async (request, response, next) => {
    let product = await Product.findById(request.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
    }

    product = await Product.findByIdAndUpdate(request.params.id, request.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    response.status(200).json({
        success: true,
        product
    });
})

exports.createReview = CatchAsyncHandler(async (request, response, next) => {

    let product = await Product.findById(request.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
    }

    product.reviews.push(request.body)
    product.save();

    const fullUrl = request.protocol + '://' + request.get('host') + "/";
    let newArray = []

    if (product?.reviews.length > 0) {
        for (const [productIndex, productSource] of product.reviews.entries()) {
            const userSource = await User.findOne({"email": productSource.owner})

            newArray.push({
                ["img"]: `${fullUrl}images/profiles/${userSource.profilePicture}`,
                    ["name"]: `${userSource.firstName} ${userSource.lastName}`,
                    ["owner"]: productSource.owner,
                    ["rating"]: productSource.rating,
                    ["comment"]: productSource.comment,
                    ["createdAt"]: productSource.createdAt,
                    ["_id"]: productSource._id
            })
        }       
    }
    console.log(newArray)

    response.status(201).json({
        success: true,
        newArray
    });

});


exports.getReviews = CatchAsyncHandler(async (request, response, next) => {

    let product = await Product.findById(request.params.id);
    const fullUrl = request.protocol + '://' + request.get('host') + "/";

    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
    }

    let newArray = []

    if (product?.reviews.length > 0) {
        for (const [productIndex, productSource] of product.reviews.entries()) {
            const userSource = await User.findOne({"email": productSource.owner})

            newArray.push({
                ["img"]: `${fullUrl}images/profiles/${userSource.profilePicture}`,
                    ["name"]: `${userSource.firstName} ${userSource.lastName}`,
                    ["owner"]: productSource.owner,
                    ["rating"]: productSource.rating,
                    ["comment"]: productSource.comment,
                    ["createdAt"]: productSource.createdAt,
                    ["_id"]: productSource._id
            })
        }
        
    }

    

    response.status(201).json({
        success: true,
        reviews: newArray
    });

});