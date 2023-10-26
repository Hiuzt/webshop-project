const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please specify the product name"],
        trim: true,
        maxLenght: 50
    },

    price: {
        type: Number,
        required: [true, "Please specify the product price"]
    },

    description: {
        type: String,
        required: [true, "Please specify the product description"],
        maxLenght: 500
    },

    discount: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    },

    category: {
        type: String,
        required: [true, "Please specify the category of the product"],
    },

    mainImage: {
        type: String,
        default: "default.jpg",
    },

    images: [
        {
            src: {
                type: String
            }
        }
    ],

    reviews: [
        {
            owner: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now
            },
        }
    ],

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Product", productSchema);