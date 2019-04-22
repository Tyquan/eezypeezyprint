const express = require('express');
const bcrypt = require('bcrypt');
const Employee = require('../models/employee');
const router = express.Router();

router.get('/signup', (req, res) => {
    res.render('employee/signup', {
        title: "Eezy Peezy Print | Signup"
    });
});

router.post('/signup', (req, res, next) => {
    let employee = new Employee(req.body);
    bcrypt.hash(employee.password, 10, (err, hash) => {
        if (err) {
            next(err);
        } else {
            employee.password = hash;
            employee.save().then((data) => {
                req.session.employee = data;
                res.render('employee/dashboard', {
                    title: "Eezy Peezy Print | Dashboard",
                    employee: req.session.employee
                });
            }).catch((err) => {
                next(err);
            });
        }
    });
});

router.get('/login', (req, res) => {
    res.render('employee/login', {
        title: "Eezy Peezy Print | Login"
    });
});

router.post('/login', (req, res, next) => {
    console.log(req.body);
    Employee.findOne({
        email: req.body.email
    }, (err, employee) => {
        if (err) {
            next(err);
        } else {
            if (!employee) {
                res.render('employee/login', {
                    title: "Eezy Peezy Print | Login",
                    message: "No User Found"
                });
            } else {
                bcrypt.compare(req.body.password, employee.password, function(err, match) {
                    if (match) {
                        req.session.employee = employee;
                        res.render('employee/dashboard', {
                            title: "Eezy Peezy Print | Dashboard",
                            employee: employee
                        });
                    } else {
                        res.render('login', {
                            message: 'Username / Password Incorrect'
                        });
                    }
                });
            }
        }
    });
});

module.exports = router;