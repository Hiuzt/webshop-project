const Categories = require("../models/categories");
const ErrorHandler = require("../utils/errorHandler");
const CatchAsyncHandler = require("../middleware/catchAsyncErrors");

exports.getCategories = CatchAsyncHandler( async (request, response, next) => {
    const categories = await Categories.find();

    const fullUrl = request.protocol + '://' + request.get('host') + "/";
    
    categories.forEach((categorySource, categoryIndex) => {
        categories[categoryIndex].categoryPicture = `${fullUrl}images/categories/${categorySource.categoryPicture}`
    })

    response.status(200).json({
        success: true,
        categories
    });
});


exports.createCategory = CatchAsyncHandler(async (request, response, next) => {
    

    if (request.file !== undefined ) {
        request.body.categoryPicture = request.file.filename
    }
    const category = await Categories.create(request.body);
    const fullUrl = request.protocol + '://' + request.get('host') + "/";
    category.categoryPicture = `${fullUrl}images/categories/${category.categoryPicture}`
    response.status(201).json({
        success: true,
        category
    });
    
});

exports.deleteCategory = CatchAsyncHandler(async (request, response, next) => {
    const category = await Categories.findById(request.params.id) ;

    if (!category) {
        return next(new ErrorHandler("Category not found", 404));
    }

    category.deleteOne();

    response.status(200).json({
        success: true,
        message: "Category successfully deleted"
    });
})

exports.updateCategory = CatchAsyncHandler(async (request, response, next) => {
    let category = await Categories.findById(request.params.id);

    if (!category) {
        return next(new ErrorHandler("Product not found", 404))
    }

    if (request.file !== undefined ) {
        request.body.categoryPicture = request.file.filename
    }

    category = await Categories.findByIdAndUpdate(request.params.id, request.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    response.status(200).json({
        success: true,
        category
    });
})