const PromotionCode = require("../models/promotionCode");
const ErrorHandler = require("../utils/errorHandler");
const CatchAsyncHandler = require("../middleware/catchAsyncErrors");

exports.getPromotionCodes = CatchAsyncHandler( async (request, response, next) => {
    const promotionCodes = await PromotionCode.find();

    response.status(200).json({
        success: true,
        promotionCodes
    });
});

exports.getPromotionCode = CatchAsyncHandler( async (request, response, next) => {
    const promotionCode = await PromotionCode.findById(request.params.id);

    if (!promotionCode) {
        return next(new ErrorHandler("Product not found", 404));
    }

    response.status(201).json({
        success: true,
        promotionCode
    });
});


exports.createPromotionCode = CatchAsyncHandler( async (request, response, next) => {
    const promotionCode = await PromotionCode.create(request.body);

    response.status(201).json({
        success: true,
        promotionCode
    })
});

exports.updatePromotionCode = CatchAsyncHandler( async (request, response, next) => {
    let promotionCode = await PromotionCode.findById(request.params.id);

    if (!promotionCode) {
        return next(new ExceptionHandler("Promotion code not found", 404))
    }

    promotionCode = await PromotionCode.findByIdAndUpdate(request.params.id, request.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    response.status(200).json({
        success: true,
        promotionCode
    })
});

exports.deletePromotionCode = CatchAsyncHandler( async (request, response, next) => {
    const promotionCode = await PromotionCode.findById(request.params.id);

    if (!promo) {
        return next(new ExceptionHandler("Promotion not found", 404))
    }

    await promotionCode.deleteOne();

    response.status(200).json({
        success: true,
        message: "Promotion code has been deleted"
    })
});