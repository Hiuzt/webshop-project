const Role = require("../models/role");
const ErrorHandler = require("../utils/errorHandler");
const CatchAsyncHandler = require("../middleware/catchAsyncErrors");

exports.getRoles = CatchAsyncHandler( async (request, response, next) => {
    const role = await Role.find();

    response.status(200).json({
        success: true,
        role
    });
});

exports.getRole = CatchAsyncHandler( async (request, response, next) => {
    const role = await Role.findById(request.params.id);

    if (!role) {
        return next(new ErrorHandler("Product not found", 404));
    }

    response.status(201).json({
        success: true,
        role
    });
});


exports.createRole = CatchAsyncHandler( async (request, response, next) => {
    const role = await Role.create(request.body);

    response.status(201).json({
        success: true,
        role
    })
});

exports.updateRole = CatchAsyncHandler( async (request, response, next) => {
    let role = await Role.findById(request.params.id);

    if (!role) {
        return next(new ExceptionHandler("Role not found", 404))
    }

    role = await Role.findByIdAndUpdate(request.params.id, request.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    response.status(200).json({
        success: true,
        role
    })
});

exports.deleteRole = CatchAsyncHandler( async (request, response, next) => {
    const role = await Role.findById(request.params.id);

    if (!role) {
        return next(new ExceptionHandler("Promotion not found", 404))
    }

    await role.deleteOne();

    response.status(200).json({
        success: true,
        message: "Role has been deleted"
    })
});