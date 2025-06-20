const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
	{
		email: {
			type: String,
			required: [true, 'Email is required!'],  //if you dont get the value, then this message comes
			trim: true,  //leading trailing spaces removed
			unique: [true, 'Email must be unique!'],
			minLength: [5, 'Email must have 5 characters!'],
			lowercase: true,
		},
		password: {
			type: String,
			required: [true, 'Password must be provided!'],
			trim: true,
			select: false,   //when you try tofetch data ftom db, it wont fetch psswd by itself, we'll have to explicitly extract it
		},
		verified: {
			type: Boolean,
			default: false,  //initially user's verified status would be false
		},
		verificationCode: {
			type: String,
			select: false,
		},
		verificationCodeValidation: {
			type: Number,
			select: false,
		},
		forgotPasswordCode: {
			type: String,
			select: false,
		},
		forgotPasswordCodeValidation: {
			type: Number,
			select: false,
		},
	},
	{
		timestamps: true,  //keeps a track of when a record is created/updated
	}
);

module.exports = mongoose.model('User', userSchema);