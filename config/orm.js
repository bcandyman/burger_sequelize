const connection = require('./connection');

orm = {
    selectAll: function (table, callback) {
        const queryStr = `SELECT * FROM ${table}`;
        connection.query(queryStr, function (err, results) {
            if (err) {
                throw err;
            };
            callback(results);
        });
    },
    selectAllWhere: function (table, whereCol, whereVal, callback) {
        const queryStr = `SELECT * FROM ${table} WHERE ${whereCol} = ${whereVal}`;
        connection.query(queryStr, function (err, results) {
            if (err) {
                throw err;
            };
            callback(results);
        });
    },
    insert: function (burgerName, table, callback) {
        const test = { name: burgerName, devoured: false };
        const queryStr = `INSERT INTO ${table} SET ?`
        connection.query(queryStr, test, function (err, results) {
            if (err) {
                throw err;
            };
            callback(results);
        });
    }
};

module.exports = orm;

