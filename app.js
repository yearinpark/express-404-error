const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/test', (req, res) => res.send('Test Now!'))

app.get('/redirect', function(req, res) {

    res.redirect('/');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))




app.use(function(req, res, next){
    res.status(404).send('404 Error!!');
});