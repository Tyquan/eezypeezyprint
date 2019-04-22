var mongoose = require('mongoose');

var employeeSchema = mongoose.Schema({
	email: {
		type: String,
		required: true
	},
	password: {
		type: String
	},
	dateCreated: {
		type: Date,
		default: Date.now
	},
});

var Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;