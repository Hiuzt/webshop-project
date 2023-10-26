const express = require("express");
const app = express();
const cors = require('cors');

const errorMiddleware = require("./middleware/errors");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use(express.static("public"))

// Import all routes
const apiRoute = "/api/v1";

const users = require("./routes/user");
const auth = require("./routes/auth");
const product = require("./routes/product");
const order = require("./routes/order");
const promo = require("./routes/promotionCode");
const role = require("./routes/role");
const categories = require("./routes/category");

app.use(apiRoute, users);
app.use(apiRoute, auth);
app.use(apiRoute, product);
app.use(apiRoute, order);
app.use(apiRoute, promo);
app.use(apiRoute, role);
app.use(apiRoute, categories);


// Error handling middleware
app.use(errorMiddleware);

module.exports = app;