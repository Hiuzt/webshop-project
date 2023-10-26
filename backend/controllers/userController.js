const User = require("../models/user");
const ExceptionHandler = require("../utils/errorHandler");
const CatchHandler = require("../middleware/catchAsyncErrors");
const { v4: uuidv4 } = require('uuid'); 
const url = require("url")
const multer = require("multer")
const path = require("path")

// Get all users

exports.getUsers = CatchHandler( async (request, response, next) => {

    const users = await User.find();
    const fullUrl = request.protocol + '://' + request.get('host') + "/";
    
    users.forEach((userSource, userIndex) => {
        users[userIndex].profilePicture = `${fullUrl}images/profiles/${userSource.profilePicture}`
    })
    response.status(200).json({
        success: true,
        users
    })
});


// Get specific user:   /api/v1/user/:id

exports.getUser = CatchHandler(async (request, response, next) => {
    const user = await User.findById(request.params.id);
    const fullUrl = request.protocol + '://' + request.get('host') + "/";
    
    if (!user) {
        return next(new ExceptionHandler("User not found", 404))
    }

    user.profilePicture = `${fullUrl}images/profiles/${user.profilePicture}`

    response.status(200).json({
        success: true,
        user
    });
});



// Create new user

exports.createUser = CatchHandler(async (request, response, next) => {

    console.log(request.body)

    const user = await User.create(request.body);

    response.status(201).json({
        success: true,
        user
    });
});



// Delete user      - /api/v1/user/:id

exports.deleteUser = CatchHandler( async (request, response, next) => {

    const user = await User.findById(request.params.id);

    if (!user) {
        return next(new ExceptionHandler("User not found", 404))
    }

    await user.deleteOne();

    response.status(200).json({
        success: true,
        message: "User has been deleted"
    })

});

// Update user      - /api/v1/user/:id
exports.updateUser = CatchHandler( async (request, response, next) => {

    
    let user = await User.findById(request.params.id);
    if (request.file !== undefined ) {
        request.body.profilePicture = request.file.filename
    }
    

    if (!user) {
        return next(new ExceptionHandler("User not found", 404))
    }

    user = await User.findByIdAndUpdate(request.params.id, request.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });


    response.status(200).json({
        success: true,
        user
    })
});




