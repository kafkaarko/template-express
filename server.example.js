// import Modules

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


//routes
// app.use("/api/user", userRoutes) Example Route


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
