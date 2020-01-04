const orm = require('../config/orm');

var burger = {
    all: function (callback) {
        orm.selectAll('burgers', function (res) {
            callback(res);
        });
    },
    insert: function (burgerName, callback) {
        orm.insert(burgerName, 'burgers', function (res) {
            callback(res);
        });
    }
};

module.exports = burger;