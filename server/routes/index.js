const express = require('express');
const mongoose = require('mongoose');
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

router.post('/contact', (req, res, next) => {
	console.log(req.body);
});

module.exports = router;