const db = require('../models');
const express = require('express');
const router = express.Router();


router.get('/api/burgers', (req, res) => {
    db.Burger.findAll({}).then(function (burgers) {
        return res.json(burgers);
    });
});

router.get('/', (req, res) => {
    db.Burger.findAll({
    }).then(function (burgers) {
        return res.render('index', { burgers });
    });
});

router.post('/api/burger/create', (req, res) => {
    db.Burger.create({
        name: req.body.name
    }).then(function (data) {
        return res.send({ redirect: '/' });
    });
});

router.put('/api/burger/devour', (req, res) => {
    db.Burger.update(
        { devoured: true },
        {
            where: { id: req.body.id }
        });
    return res.send({ redirect: '/' });
});

module.exports = router;