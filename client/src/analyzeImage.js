//Detect Labels#1
// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

var analyzeImage = function() {
// Creates a client
const client = new vision.ImageAnnotatorClient();
data = (
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
)
 return data
}
analyzeImage()
///////////////////////////////////////////////////////
//Detect Labels#2
// const vision = require('@google-cloud/vision');

// var analyzeImage = async function() {
// // Creates a client
// const client = new vision.ImageAnnotatorClient();
// const fileName = `/Users/justinguan/Desktop/HR/HRSF127/projects/MVP/saveImage/01.jpeg`;
// const [result] = await client.labelDetection(fileName);
// const labels = result.labelAnnotations;
// console.log('Labels:');
// labels.forEach(label => console.log(label.description));
// }
// analyzeImage ()


///////////////////////////////////////////////////////
//Detect Labels#3
// const vision = require('@google-cloud/vision');

// var analyzeImage = async function() {
// // Creates a client
// const client = new vision.ImageAnnotatorClient();
// const fileName = `/Users/justinguan/Desktop/HR/HRSF127/projects/MVP/saveImage/01.jpeg`;
// const [result] = await client.labelDetection(fileName);
// const labels = result.labelAnnotations;
// console.log('Labels:');
// labels.forEach(label => console.log(label.description));
// }
// analyzeImage ()

// module.exports.analyzeImage = analyzeImage