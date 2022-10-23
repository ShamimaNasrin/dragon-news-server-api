const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const news = require('./data/news.json');

//to create app
app.get('/', (req, res) => {
    res.send('News API Running');
});

//create api for category data
app.get('/news-categories', (req, res) => {
    res.send(categories)
})

//creating news api according to category_id
app.get('/category/:id', (req, res) => {
    const id = req.params.id;

    //all the news will show for id: 08
    if (id === '08') {
        res.send(news);
    }
    else {
        const category_news = news.filter(n => n.category_id === id);
        res.send(category_news);
    }
})

//creating news api according to newsid(for a single news)
app.get('/news/:id', (req, res) => {
    // console.log(req.params);
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
    console.log(selectedNews);
})

app.listen(port, () => {
    console.log('Dragon News Server running on port', port);
})