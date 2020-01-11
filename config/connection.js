const mySql = require('mysql');
let connection;

if (process.env.JAWSDB_URL) {
    connection = mySql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mySql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'sqlPassword',
        database: 'burgers_db'
    });
};


connection.connect((err) => {
    if (err) {
        throw err;
    };
    console.log('Connection ID: ' + connection.threadId);
});

module.exports = connection;