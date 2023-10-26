const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, "Please enter your user name"],
        trim: true,
        maxLenght: [32, "Username cannot exceed 32 characters"],
        unique: true
    },

    email: {
        type: String,
        required: [true, "Please enter an email"],
        maxLenght: [100, "Email cannot be longer than 100 characters"],
        unique: true
    },

    password: {
        type: String,
        required: [true, "Please enter your password"],
        minlength: [8, "Your password must be longer than 8 characters"],
        select: false
    },

    firstName: {
        type: String,
        required: [true, "Please enter first name"]
    },

    lastName: {
        type: String,
        required: [true, "Please enter last name"]
    },

    // address: {
    //     type: String
    // },

    role: {
        type: String,
        required: [true, "Please enter the user's role"],
        default: "user"
    },

    profilePicture: {
        type: String,
        default: "default.jpg"
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    verified: {
        type: Boolean,
        default: false
    },

    verificationToken: String,
    verificationTokenExpire: Date,

    resetPasswordToken: String,
    resetPasswordTokenExpire: Date
})

// Decrypt password
userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}


userSchema.methods.getJwtToken = function() {
    return jwt.sign( {id: this._id}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_SESSION_TIME });
}

userSchema.methods.getVerificationToken = function() {
    const token = crypto.randomBytes(20).toString('hex');
    this.verificationToken = crypto.createHash("sha256").update(token).digest("hex");

    // Token expire time: 30 mintutes
    this.verificationTokenExpire = Date.now() + 30 * 60 * 1000;

    return this.verificationToken;
}

userSchema.methods.getPasswordRecoveryToken = function() {
    const token = crypto.randomBytes(20).toString('hex');
    this.resetPasswordToken = crypto.createHash("sha256").update(token).digest("hex");

    // Token expire time: 30 minutes
    this.resetPasswordTokenExpire = Date.now() + 30 * 60 * 1000;

    return this.resetPasswordToken;
}

module.exports = mongoose.model("User", userSchema)