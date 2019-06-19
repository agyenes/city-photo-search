'use strict';

const express = require('express');
const app = express();
const port = 3000;
const cities = require('../../node_modules/cities.json/cities.json');
const finder = require('./finder');

const myFinder = finder();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/citysearch/', (req, res) => res.send(myFinder.findMatches(req.query.name, cities)));

app.listen(port);