const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();

const PORT = process.env.PORT || 3000;

//SET VIEW ENGINE
app.use(express.static(path.join(__dirname, '/public')));
app.use(expressLayouts);
app.set('layout', 'layouts/layout');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});