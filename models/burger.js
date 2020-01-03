const orm = require('../config/orm');

var burger = {
    all: function (callback) {
        orm.selectAll('burgers', function (res) {
            callback(res);
        });
    }
};

module.exports = burger;