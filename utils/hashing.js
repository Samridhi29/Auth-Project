const { createHmac } = require('crypto');
const { hash, compare } = require('bcrypt');

exports.doHash = (value, saltValue) => {
	const result = hash(value, saltValue);
	return result;
};

exports.doHashValidation = (value, hashedValue) => {
	const result = compare(value, hashedValue);
	return result;
};

//Hash-based Message Authentication Code
exports.hmacProcess = (value, key) => {
	const result = createHmac('sha256', key)  //sha256 algo, key is secret
	               .update(value)  //value is the data to be hashed
	               .digest('hex'); //digest is the final output, in hex format
	return result;
};

