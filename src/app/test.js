'use strict';

const test = require('tape');
const finder = require('./finder');
const myFinder = finder();
const cities = require('../../node_modules/cities.json/cities.json');

const getNames = (obj) => {
    let names = [];
    for (const key of Object.keys(obj)) {
        names.push(obj[key].name);
    }
    return names;
};

test('returns only the first 10 results', function (t) {
    t.equal(myFinder.findMatches('a', cities).length < 11, true);
    t.end();
});

test('no match', function (t) {
    t.equal(myFinder.findMatches('qwerty', cities).length === 0, true);
    t.end();
});

test('no array', function (t) {
    t.equal(myFinder.findMatches('', null).error, 'Missing input');
    t.end();
});

test('no word to match', function (t) {
    t.equal(myFinder.findMatches(null, '').error, 'Missing input');
    t.end();
});

test('first element of result starts with word to match', function (t) {
    t.equal(getNames(myFinder.findMatches('ce', cities))[0], 'Cerava');
    t.end();
});