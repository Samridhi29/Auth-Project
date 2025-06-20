const Joi = require('joi');

exports.signupSchema = Joi.object({
	email: Joi.string()
		.min(6)
		.max(60)
		.required()
		.email({
			tlds: { allow: ['com', 'net'] },  //.com and .net emails allowed
		}),
	password: Joi.string()  //should be in string format
		.required()
		.pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,}$')),
});