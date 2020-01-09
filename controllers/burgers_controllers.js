const burger = require('../models/burger');
const express = require('express');
const router = express.Router();


router.get('/api/burgers', (req, res) => {
    burger.all((data) => {
        return res.json(data);
    });
});

router.get('/', (req, res) => {
    burger.all((data) => {
        return res.render('index', { data });
    })
});

router.post('/api/burger/create', (req, res) => {
    const burgerName = req.body.name
    burger.insert(burgerName, (data) => {
        return res.send({ redirect: '/' });
    });
});

router.put('/api/burger/devour', (req, res) => {
    const burgerId = req.body.id;
    burger.devour(burgerId, () => {
        return res.send({ redirect: '/' });
    });
});

module.exports = router;