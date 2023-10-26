const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Please add the name of the categorie"]
    },
    
    categoryPicture: {
        type: String,
        default: "default.jpg"
    },
});

module.exports = mongoose.model("Categories", categorySchema)