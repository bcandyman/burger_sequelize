const express = require('express');
const router = express.Router();
const burger = require('../models/burger');


router.route('/api/burgers')
    .get(function (req, res) {
        burger.all(function (data) {
            console.log(data);
            return res.json(data);
        })
    })

router.route('/*')
    .get(function (req, res) {
        burger.all(function (data) {
            return res.render('index', { data });
        })
    })
    .post(function (req, res) {
        const burgerName = req.body.name
        burger.insert(burgerName, function (data) {
            return res.send(req.body);
        })
    })

module.exports = router;