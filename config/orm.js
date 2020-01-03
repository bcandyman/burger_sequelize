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
    }
};

module.exports = orm;

