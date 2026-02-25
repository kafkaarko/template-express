const { errorResponse } = require("../Utils/response.utils");

const errorMiddleware = (err, req, res, next) => {
    console.error("ERROR LOG:", err.stack); // Log untuk developer

    // Default error status
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";

    // Tangani error spesifik dari MongoDB/Mongoose
    if (err.name === 'CastError') {
        statusCode = 400;
        message = "Format ID tidak valid";
    }

    return errorResponse(res, message, {
        type: err.name,
        // Tampilkan stack trace hanya jika di mode development
        stack: process.env.NODE_ENV === 'development' ? err.stack : null 
    });
};

module.exports = errorMiddleware;