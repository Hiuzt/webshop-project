const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    shippingInformation: {
        address: {
            type: String,
            required: true,
        },

        city: {
            type: String,
            required: true,
        },

        country: {
            type: String,
            required: true,
        },

        phone: {
            type: String,
            required: true,
        },

        postalCode: {
            type: String,
            required: true,
        }
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    items: [
        {
            name: {
                type: String,
                required: true
            },

            quantity: {
                type: Number,
                required: true
            },

            price: {
                type: Number,
                required: true
            },
            
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            },
        },
    ],

    payment: {
        id: {
            type: String
        },
        status: {
            type: String
        }
    },

    paidAt: {
        type: Date
    },

    productsPrice: {
        type: Number,
        required: true,
        default: 0.0
    },

    taxPrice: {
        type: Number,
        required: true,
        default: 0.0
    },

    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0
    },

    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },

    orderStatus: {
        type: String,
        required: true,
        default: "Processing"
    },

    deliveredAt: {
        type: Date
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Order", orderSchema);