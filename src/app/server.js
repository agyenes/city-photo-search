'use strict';

const express = require('express');
const app = express();
const port = 3000;
const cities = require('../../node_modules/cities.json/cities.json');

function findMatches(wordToMatch) {
    return cities.filter(item => {
        let cityName = item.name.toLowerCase();
        return cityName.startsWith(wordToMatch);
    }).slice(0,10);
}

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/citysearch/', (req, res) => res.send(findMatches(req.query.name)));

app.listen(port);