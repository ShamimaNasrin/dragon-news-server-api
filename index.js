const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

//to create app
app.get('/', (req, res) => {
    res.send('News API Running');
});

app.listen(port, () => {
    console.log('Dragon News Server running on port', port);
})