const express = require('express');
//const mongoose = require('mongoose');
const Contact = require('../models/contact');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { 
	    title: 'Eezy Peezy Print'
	});
});

// Design Lab
router.get('/studio', function(req, res, next) {
	res.render('static/studio', { 
	    title: 'Eezy Peezy Print'
	});
});

// Design Lab
router.get('/about', function(req, res, next) {
	res.render('static/about', { 
	    title: 'Eezy Peezy Print'
	});
});

// Design Lab
router.get('/contact', function(req, res, next) {
	res.render('static/contact', { 
	    title: 'Eezy Peezy Print'
	});
});

router.get('/contactSubmit', (req, res, next) => {
	res.render('static/contactSubmit');
});

router.post('/contact', (req, res, next) => {
	let contact = new Contact(req.body);
	contact.save().then((info) => {
		res.render("static/contactSubmit", {
			title: "Eezy Peezy Print",
			data: info
		});
	}).catch((error) => {
		next(error);
	});
});

module.exports = router;