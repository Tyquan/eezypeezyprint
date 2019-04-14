var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phoneNumber: {
		type: String
	},
	reason: {
		type: String
	},
	message: {
		type: String
	},
	dateCreated: {
		type: Date,
		default: Date.now
	},
});

var Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;