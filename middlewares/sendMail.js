const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
	service: 'gmail',  //has a limit of 500 sending per day
	auth: {
		user: process.env.NODE_CODE_SENDING_EMAIL_ADDRESS,  //user from which mails would be sent
		pass: process.env.NODE_CODE_SENDING_EMAIL_PASSWORD,
	},
});

module.exports = transport;