const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const db = require('./models')
const routes = require('./controllers/burgers_controllers');

const PORT = process.env.PORT || 3000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log('Listening on port: ' + PORT + ' http://localhost:' + PORT);
    });
});