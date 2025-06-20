const { signupSchema } = require('../middlewares/validator');
const User= require('../models/usersModel');
const { doHash }= require("../utils/hashing");

exports.signup = async (req, res) => {
	const { email, password } = req.body;  //when a user tries to signup, they should provide email,psswd in req body
	try {
		const { error, value } = signupSchema.validate({ email, password });

		if (error) {
			return res
				.status(401)  //401 - req not succesful, lacks valid authentication
				.json({ success: false, message: error.details[0].message });
		}

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res
				.status(401)
				.json({ success: false, message: 'User already exists!' });
		}

		const hashedPassword = await doHash(password, 12);
		const newUser = new User({
			email,
			password: hashedPassword,
		});
		const result = await newUser.save();
		result.password = undefined;  //mongoose returns email and psswd, but we dont want to send hashed psswd, so we return undefined
		res.status(201).json({
			success: true,
			message: 'Your account has been created successfully',
			result,
		});
	} catch (error) {
		console.log(error);
	}
};
