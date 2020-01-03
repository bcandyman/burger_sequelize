const mySql = require('mysql');

const connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sqlPassword',
    database: 'burgers_db'
});

connection.connect((err) => {
    if (err) {
        throw err;
    };
    console.log('Connection ID: ' + connection.threadId)
});

module.exports = connection;