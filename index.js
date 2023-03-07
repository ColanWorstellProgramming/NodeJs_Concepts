//full stack requests and sends - callbacks

const express = require('express');
const { readFile } = require('fs').promises;

const app = express();

app.get('/', async (request, response) => {
    response.send( await readFile('./first.html', 'utf8'))
});

app.listen(process.env.PORT || 3000, () => console.log('App avaliable on http://localhost:3000'))