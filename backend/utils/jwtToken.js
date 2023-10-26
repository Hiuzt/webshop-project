exports.sendToken = (user, statusCode, response) => {
    const token = user.getJwtToken();

    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_SESSION_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly: false,
        path: "/"
    }

    response.status(statusCode).cookie('auth_token', token, options).json({
        success: true,
        token,
        user
    })

}

// Function for logging into admin control panel (token expiration is 15 minutes)

exports.sendAdminToken = (user, statusCode, response) => {
    const token = user.getJwtToken();

    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_SESSION_TIME_ADMIN * 60 * 1000
        ),
        httpOnly: true
    }

    response.status(statusCode).cookie('admin-auth-token', token, options).json({
        success: true,
        token,
        user
    })
}