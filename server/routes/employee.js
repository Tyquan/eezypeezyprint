const express = require('express');
const Employee = require('../models/employee');
const Contact = require("../models/contact");
const router = express.Router();

router.get('/dashboard', (req, res) => {
    if (!req.session.employee) {
        res.render('auth/login', {
            message: "You have to be logged in to view the private section"
        });
    } else {
        res.render('employee/dashboard', {
            title: "Eezy Peezy Print | Dashboard",
            employee: req.session.employee
        });
    }
});

router.get('/contacts', (req, res, next) => {
    if (!req.session.employee) {
        res.render('auth/login', {
            message: "You have to be logged in to view the private section"
        });
    } else {
        Contact.find({}, (err, contacts) => {
            if (err) {
                next(err);
            } else {
                console.log(contacts);
                res.render('employee/contacts', {
                    title: "Eezy Peezy Print | Contacts",
                    employee: req.session.employee,
                    contacts: contacts
                });
            }
        });
        
    }
});

module.exports = router;