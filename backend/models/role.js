const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Please add the name of the role"]
    },

    // Permissions

    // Admin related permissions

    login_acp: {
        type: Boolean,
        default: false,
        description: "asd"
    },



    view_acp: { type: Boolean, default: false },
    view_o_site: { type: Boolean, default: false },
    get_users: { type: Boolean, default: false },
    create_user: { type: Boolean, default: false },
    delete_user: { type: Boolean, default: false },
    update_user: { type: Boolean, default: false },
    create_promo: { type: Boolean, default: false },
    delete_promo: { type: Boolean, default: false },
    create_product: { type: Boolean, default: false },
    update_product: { type: Boolean, default: false },
    delete_product: { type: Boolean, default: false },

});

module.exports = mongoose.model("Role", roleSchema)