//when a user posts somethings, this model would be responsible for storing those posts
const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, 'title is required!'],
			trim: true,
		},
		description: {
			type: String,
			required: [true, 'description is required!'],
			trim: true,
		},
		userId: {
			type: mongoose.Schema.Types.ObjectId,  //links user to the post
			ref: 'User',  //reference from User model
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);