const express = require('express');
const mongoose = require('mongoose');
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

// Shirt Order
router.get('/shirtorder', function(req, res, next) {
	res.render('static/order', { 
	    title: 'Eezy Peezy Print'
	});
});
module.exports = router;