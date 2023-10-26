const Role = require("../models/role");
const ErrorHandler = require("../utils/errorHandler");
const CatchAsyncHandler = require("./catchAsyncErrors");

exports.isAuthorizedRole = (permission) => {
    return CatchAsyncHandler( async (request, response, next) => {
        const role = request.user.role;

        if (!role) {
            return next(new ErrorHandler("Unauthorized access", 403));
        }

        const _dbRole = await Role.findOne({ name: role });
        if (!_dbRole) {
            return next(new ErrorHandler("Unauthorized access", 403));
        }


        if (!_dbRole || _dbRole[permission] !== true) {
            return next(new ErrorHandler("Unauthorized access.", 403));   
        }

        next();
    });
};