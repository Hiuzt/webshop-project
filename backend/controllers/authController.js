const User = require("../models/user");
const jwt = require("jsonwebtoken");

const ErrorHandler = require("../utils/errorHandler");
const CatchAsyncHandler = require("../middleware/catchAsyncErrors");
const { sendToken, sendAdminToken } = require("../utils/jwtToken");
const { isAuthenticatedUser, isAuthorized } = require("../middleware/authentication"); // Required for admin logins
const {sendEmail} = require("../utils/sendEmail");


exports.register = CatchAsyncHandler(async (request, response, next) => {
    const { username, email, password, firstName, lastName } = request.body;

    console.log(request.body);

    const user = await User.create({
        username,
        email,
        firstName,
        lastName,
        password
    });

    const verificationToken = user.getVerificationToken();

    await user.save({ validateBeforeSave: false })

    const verifyURL = `${request.protocol}://${request.get("host")}/api/v1/verify/${verificationToken}`;
    const message = `
        Dear <b>${firstName} ${lastName}</b>,<br><br>
        Thank you for your registration. In order to enjoy all features, please verify you account by clicking the following button:<br><br>
        <a href="${verifyURL}" style="padding: 5px 10px; background-color: #55bbbb; border-radius: 15px;">
        ${verifyURL}</a><br>
        This is an automatically generated email, please do not reply to this message!<br><br>
        Best regards,<br>${process.env.COMPANY_NAME}
    `;

    try {
        await sendEmail({
            email: user.email,
            subject: `${process.env.COMPANY_NAME} - User verification`,
            message
        })

        const token = user.getJwtToken();

        response.status(201).json({
            success: true,
            token,
        })

    } catch (error) {
        user.verificationToken = undefined;
        user.verificationTokenExpire = undefined;

        await user.save({ validateBeforeSave: false });

        next(new ErrorHandler("Internal Server Error - Could not send email", 500));
    }
})

exports.login = CatchAsyncHandler(async (request, response, next) => {
    const { email, password } = request.body;

    if (!email || !password) {
        return next(new ErrorHandler("Please enter email & password", 400))
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    const fullUrl = request.protocol + '://' + request.get('host') + "/";
    user.profilePicture = `${fullUrl}images/profiles/${user.profilePicture}`

    sendToken(user, 200, response);
});


// ACP login - its token will expiry in 10 mins of inactivity

exports.loginAdmin = CatchAsyncHandler(async (request, response, next) => {
    const { email, password } = request.body;

    if (!email || !password) {
        return next(new ErrorHandler("Please enter email & password", 400))
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    sendAdminToken(user, 200, response);
});

// Logout

exports.logout = CatchAsyncHandler( async (request, response, next) => {
    response.cookie("auth_token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    response.status(200).json({
        success: true,
        message: "Logged out"
    })
});

// LoggedIn

exports.loginStatus = CatchAsyncHandler(async(request, response, next) => {
    const userToken = request.cookies.auth_token;

    if (!userToken) {
        return response.json(false);
    }

    // Verify token
    const verifiedToken = jwt.verify(userToken, process.env.JWT_SECRET);

    if (verifiedToken) {
        let userSource = await getUser(verifiedToken?.id)   
        const fullUrl = request.protocol + '://' + request.get('host') + "/";
        userSource.profilePicture = `${fullUrl}images/profiles/${userSource.profilePicture}`
        return response.json({token: userToken, user: userSource});
    }

    return response.json(null);
})

async function getUser(userID) {
    const user = await User.findById(userID);

    if (!user) {
        return "User not found";
    }

    return user;
};

// Verification token

exports.verify = CatchAsyncHandler(async (request, response, next) => {
    const token = request.params.token;

    if (!token) {
        return next(new ErrorHandler("Invalid token", 401));
    }

    const user = await User.findOneAndUpdate(
        { verificationToken: token },
        { verified: true, verificationToken: null, verificationTokenExpire: null },
        { new: true }
    );

    if (!user) {
        return next(new ErrorHandler("Invalid token", 401));
    }

    console.log(user);

    response.status(201).json({
        success: true,
        message: "User has been successfully verified"
    })
});

exports.forgotPassword = CatchAsyncHandler(async (request, response, next) => {
    const {email} = request.body;

    if (!email) {
        return next(new ErrorHandler("Email has to be provided", 400));
    }

    const user = await User.findOne({email: email})
    if (!user) {
        return next(new ErrorHandler("Email has to be provided", 400));
    }
    const recoveryToken = user.getPasswordRecoveryToken();

    await user.save({ validateBeforeSave: false })

    const forgotUrl = `${request.protocol}://${request.get("host")}/api/v1/auth/password/reset/${recoveryToken}`;
    const message = `
        Dear <b>${user.firstName} ${user.lastName}</b>,<br><br>
        Please click the following link to recover your password!
        <a href="${forgotUrl}" style="padding: 5px 10px; background-color: #55bbbb; border-radius: 15px;">
        ${forgotUrl}</a><br>
        This is an automatically generated email, please do not reply to this message!<br><br>
        Best regards,<br>${process.env.COMPANY_NAME}
    `;

    try {
        await sendEmail({
            email: user.email,
            subject: `${process.env.COMPANY_NAME} - Password recovery`,
            message
        })

        const token = user.getJwtToken();

        response.status(201).json({
            success: true,
            token,
        })

    } catch (error) {
        user.verificationToken = undefined;
        user.verificationTokenExpire = undefined;

        await user.save({ validateBeforeSave: false });

        next(new ErrorHandler("Internal Server Error - Could not send email", 500));
    }

}); 

exports.resetPassword = CatchAsyncHandler(async (request, response, next) => {
    const resetPasswordToken = crypto.createHash("sha256").update(request.params.token).digest("hex");

    const user = await User.findOne({
        resetPasswordToken, resetPasswordExpire: { $gt: Date.now() }
    })


    if (!user) {
        return next(new ErrorHandler("Password reset token is invalid"));
    }

    if (request.body.password !== request.body.confirmPassword) {
        return next(new ErrorHandler("Passwords do not match", 400));
    }

    user.password = request.body.password;

    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined

    await user.save()

    sendToken(user, 200, response)
});

exports.changePassword = CatchAsyncHandler(async (request, response, next) => {
    const { userID, oldPassword, newPassword, newPasswordRecovery } = request.body;

    const user = await User.findById(userID).select("+password");

    if (!user) {
        return next(new ErrorHandler("User does not exist", 404))
    }

    if (newPassword !== newPasswordRecovery) {
        return next(new ErrorHandler("Passwords do not match", 400));
    }

    const isPasswordCorrect = await user.comparePassword(oldPassword);

    if (!isPasswordCorrect) {
        return next(new ErrorHandler("Original password is incorrect", 400));
    }

    user.password = newPassword;
    await user.save();
});