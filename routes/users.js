var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

var User = require('../models/user');

const saltRounds = 10;

router.post('/', function (req, res, next) {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        var user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hash,
            email: req.body.email
        });
        user.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: result
            });
        });
    });
});

router.post('/signin', function (req, res, next) {
    User.findOne({email: req.body.email}, function (err, doc) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!doc) {
            return res.status(500).json({
                title: 'No user found',
                error: {message: 'User could not be found'}
            });
        }
        bcrypt.compare(req.body.password, doc.password, function(err, result) {
            if (result != true) {
                return res.status(401).json({
                    title: 'Could not sign you in',
                    error: {message: 'Invalid password'}
                });
            }
            var token = jwt.sign({user: doc}, 'secret', {expiresIn: 7200});
            res.status(200).json({
                message: 'Success',
                token: token,
                userId: doc._id
            });
        });
    })
});

module.exports = router;