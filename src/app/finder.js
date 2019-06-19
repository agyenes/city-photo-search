'use strict';

const inputMissing = {
    "status": "error",
    "error": "Missing input"
};

const finder = () => {    
    function findMatches(wordToMatch, inputArray) {
        if (!inputArray || !wordToMatch) return inputMissing;

        let result = inputArray.filter(item => {
            let cityName = item.name.toLowerCase();
            return cityName.startsWith(wordToMatch);
        }).slice(0,10);
        return result;
    }    
    
    return {
        findMatches: findMatches
    }
};

module.exports = finder;