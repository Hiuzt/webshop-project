const mongoose = require("mongoose");

const promotionSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },

    code: {
        type: String,
        unique: true,
        required: true
    },

    discount: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    }
});

module.exports = mongoose.model("PromotionCode", promotionSchema)