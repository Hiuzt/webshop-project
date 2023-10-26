const Order = require("../models/order");
const Product = require("../models/product");
const User = require("../models/product");

const ErrorHandler = require("../utils/errorHandler");
const CatchAsyncHandler = require("../middleware/catchAsyncErrors");
const {sendEmail} = require("../utils/sendEmail");

exports.getOrders = CatchAsyncHandler(async (request, response, next) => {
    const orders = await Order.find();

    response.status(200).json({
        success: true,
        orders
    });
});

exports.getOrder = CatchAsyncHandler(async (request, response, next) => {
    const order = await Order.findById(request.params.id);

    if (!order) {
        return next(new ErrorHandler("Order not found", 404));
    }

    response.status(200).json({
        success: true,
        order
    });
});

exports.getMyOrders = CatchAsyncHandler(async (request, response, next) => {
    const orders = await Order.find({ user: request.user.id });

    if (!orders) {
        return next(new ErrorHandler("User does not have any orders", 404));
    }

    response.status(200).json({
        success: true,
        orders
    });
});

exports.getUserOrders = CatchAsyncHandler(async (request, response, next) => {
    const orders = await Order.find({ user: request.params.id });

    if (!orders) {
        return next(new ErrorHandler("User does not have any orders", 404));
    }

    response.status(200).json({
        success: true,
        orders
    });
});


exports.createOrder = CatchAsyncHandler(async (request, response, next) => {
    const { items, shippingInformation, productsPrice, taxPrice, shippingPrice, totalPrice, paymentInfo } = request.body;

    const order = await Order.create({ items, shippingInformation, productsPrice, taxPrice, shippingPrice, totalPrice, paymentInfo, paidAt: Date.now(), user: request.user._id });

    if (! order) {
        return next(new ErrorHandler("Could not place the order! Please contact the support", 500));
    }
    
    response.status(201).json({
        success: true,
        order
    })
});


exports.updateOrder = CatchAsyncHandler(async (request, response, next) => {
    const order = await Order.findById(request.params.id);

    if (!order) {
        return next(new ErrorHandler("Order not found", 404));
    }

    if (order.status == "completed") {
        return next(new ErrorHandler("This order has already been completed", 400));
    }

    order = await Order.findByIdAndUpdate(request.params.id, request.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    response.status(200).json({
        message: success,
        order
    })
});

exports.cancelOrder = CatchAsyncHandler(async (request, response, next) => {
    const order = await Order.findById(request.params.id);

    if (order.status === "shipped") {
        return next(new ErrorHandler("You cannot cancel order which was already shipped", 400));
    }

    order.status = "cancelled";

    await order.save();

    // Send email that the order has been cancelled, and need to be refunded - also for user

    const user = User.findById(order.user);
    const message = `The order: ${order.id} has been cancelled. <br><br>Refunding process has been started, it may take serveral days! <br><br>Best regards,<br>${process.env.COMPANY_NAME}`

    await sendEmail({
        email: user.email,
        subject: `${process.env.COMPANY_NAME} - Order cancellation`,
        message
    })

    response.status(200).json({
        success: true,
        message: "Order has been cancelled"
    })
})