// const Joi = require('joi');

// example
// const bookSchema = {
//     judul: Joi.string().min(3),
//     pengarang: Joi.string(),
//     bahasa: Joi.string(),
// };

//for required
// const createBookSchema = Joi.object(bookSchema).options({ presence: 'required' });
//for optional min one to update 
// const updateBookSchema = Joi.object(bookSchema).min(1);

// example case
// const { error, value } = bookSchema.validate(req.body, { abortEarly: false });
// if (error) {
//             const errorMessage = error.details.map(detail => detail.message);
//             return errorResponse(res, "Validation Error", errorMessage);
//         }