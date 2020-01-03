const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./controllers/burgers_controllers');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(routes);

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT + ' http://localhost:' + PORT);
});