const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');

//to create app
app.get('/', (req, res) => {
    res.send('News API Running');
});

//create api for category data
app.get('/news-categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log('Dragon News Server running on port', port);
})