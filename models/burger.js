const orm = require('../config/orm');

var burger = {
    all: function (callback) {
        orm.selectAll('burgers', function (res) {
            callback(res);
        });
    },
    allWhere: function (callback) {
        orm.selectAllWhere('burgers', 'devoured', 0, function (res) {
            callback(res);
        });
    },
    devour: function (burgerId, callback) {
        orm.update('burgers', 'devoured', 'id', burgerId, 1, function (res) {
            callback(res);
        });
    },
    insert: function (burgerName, callback) {
        orm.insert(burgerName, 'burgers', function (res) {
            callback(res);
        });
    },
};

module.exports = burger;