// const { errorResponse } = require("../Utils/response")

// const RoleMiddleware = (roles) =>{
//     return (req, res, next) =>{
//         if(!roles.includes(req.user.role)){
//             return errorResponse(res, `forbidden access for role ${role}`)
//         }
//         next();
//     };
// };

// module.exports = RoleMiddleware