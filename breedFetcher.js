//allows us to tap into the request module
const request = require('request');

// -new var named breed allows us to grab user input and put it into the request url
// which fetches the specific breed the user inputed
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function (error, response, body) {
  
  //console.error('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the link in request

  //this conlog shows that the request func returns the value og body as a string
  //console.log("L12: what type is this?: " + typeof body) 

  //if the value of error is truthy then run this code and breakout of the func
  if (error){
    return console.log("ERROR: ", error)
  }; 

// -this code block converts the value of var body (from string) to a JSON
// object format and stores it in a var called data
  const data = JSON.parse(body);

//this new conlog shows that data is in fact an array of objects (not a string like it used to be)
//console.log("L21: what type is this?: " + typeof data) 

//if the value of data at index 0 evaluates truthy return that value.
if (data[0]) {
    console.log("LINE 31: ", data[0].description);
    } 
  else {
    console.log("Breed not found");
  }

});