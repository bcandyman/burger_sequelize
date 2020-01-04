const express = require('express');
const router = express.Router();
const burger = require('../models/burger');


router.route('/')
    .get(function (req, res) {
        burger.all(function (data) {
            console.log(data);
            return res.render('index');
        })
    })
    .post(function (req, res) {
        console.log(req.body)
        return res.send(req.body);
    })

module.exports = router;