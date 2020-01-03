const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT + ' http://localhost:' + PORT);
});