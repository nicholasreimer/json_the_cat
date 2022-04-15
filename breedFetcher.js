
const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
  
    // if an error has an assigned value then return the callback func with error as its
    // first arg and null as its second
    // NOTE: null is passed becuase the callback is expecting a description in the 2nd arg
    // but we dont have one for this case so instead we pass null to fill the 2nd arg spot
    if (error) {
      return callback(error, null);
    }

    const data = JSON.parse(body);

    if (data[0]) {
      return callback(null, data[0].description);
    
    } else {

      return callback("Breed not found", null);
    }

  });
};

module.exports = fetchBreedDescription;