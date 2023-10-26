const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");
const CatchAsyncHandler = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");

exports.isAuthenticatedUser = CatchAsyncHandler( async (request, response, next) => {
    const { auth_token } = request.cookies

    if (!auth_token) {
        return next(new ErrorHandler("Unauthorized access", 401));
    }

    const decodedToken = jwt.verify(auth_token, process.env.JWT_SECRET);
    request.user = await User.findById(decodedToken.id);

    if (request.user.verified == false) {
        return next(new ErrorHandler("User is not verified", 401));
    }

    next();
});


exports.isInRole = (...roles) => {
    return (request, response, next) => {
        if (!roles.includes(request.user.role)) {
            return next(new ErrorHandler("Unauthorized access", 403));
        }

        next();
    }
}