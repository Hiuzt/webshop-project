const app = require('./app.js');
const connectDatabase = require('./config/database');

const dotenv = require('dotenv');

// Uncaught exception
process.on('uncaughtException', error => {
    console.log(`ERROR: ${error.stack}`);
})

// Setting up config file
dotenv.config({ path: 'config/config.env' })

// Connect to Database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.DEBUG} mode.`);
})

process.on("unhandledRejection", error => {
    console.log(`ERROR: ${error.message}`);
    console.log('Unhandled promise rejection')
    server.close(() => {
        process.exit(1);
    })
})