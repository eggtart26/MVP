
// module.exports = {
// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

client
 .labelDetection('../../saveImage/01.jpeg')
 .then(results => {
     const labels = results[0].labelAnnotations;

     console.log('Labels:');
     labels.forEach(label => console.log(label.description));
 })
 .catch(err => {
console.error('Error', err);
 })

// }
