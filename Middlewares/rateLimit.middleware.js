// const rateLimit = require('express-rate-limit');

// // Limit Login (Lebih ketat untuk mencegah Brute Force)
// const loginLimiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 menit
//     max: 5, // Maksimal 5 percobaan login
//     message: {
//         status: false,
//         message: "Terlalu banyak percobaan login, silakan coba lagi setelah 15 menit"
//     },
//     standardHeaders: true, // Kembalikan info limit di header `RateLimit-*`
//     legacyHeaders: false, // Matikan header `X-RateLimit-*`
// });

// // Limit umum untuk API lainnya (Lebih longgar)
// const apiLimiter = rateLimit({
//     windowMs: 1 * 60 * 1000, // 1 menit
//     max: 100, // 100 request/menit
//     message: {
//         status: false,
//         message: "Terlalu banyak permintaan dari IP ini, harap santai sedikit."
//     }
// });

// module.exports = { loginLimiter, apiLimiter };