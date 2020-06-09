const GSR = require('google-search-results-nodejs')
let client = new GSR.GoogleSearchResults()

var parameter = {
    q: "beef potato recipe",
    location: "United States",
    hl: "en",
    gl: "us",
    google_domain: "google.com",
};

var callback = function(data) {
  console.log(data)
}

// Show result as JSON
client.json(parameter, callback)