// import Modules
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cookieParser = require('cookie-parser');
// const path = require('path')
// const errorMiddleware = require('./Middlewares/error.middleware');
//routes
// const userRoutes = require("./Routes/userRoute.js") Example route


// //set up awal
// dotenv.config()
// const app = express()
// const PORT = process.env.PORT Example set up

//middlaware
// app.use(cookieParser());
// app.use(express.json())//agar bisa mengirim body dalam format json
// app.use(express.urlencoded({ extended: true }))
// app.use(cors({
//     origin: [process.env.API_FE_URL || "http://localhost:3000", "http://127.0.0.1:3000"],
//     credentials:true,
// })) Example CORS
// app.use("/uploads", express.static(path.join(process.cwd(), "Uploads")))
// app.set('trust proxy', 1)

//routes
// app.use("/api/user", userRoutes) Example Route


// app.use((req, res, next) => {
//     const error = new Error(`Oops! Anda salah jalan. Endpoint ${req.originalUrl} tidak ditemukan`);
//     error.statusCode = 404;
//     next(error); // Lempar ke Global Error Middleware
// });
// app.use(errorMiddleware)

// //listen on the port
// mongoose.connect(process.env.MON_URI)
//     .then(() => {
//         app.listen(PORT, () => {
//             console.log(`connect to db and listening http://localhost:${PORT} !`)
//         })
//     })
//     .catch((error) => {
//         console.log(error)
//     })   
// if use mongodb atlas
