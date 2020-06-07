const express = require('express');
const app = express();
const cors = require('cors')
// const pool = require('../database/index')
const path = require('path');
// const expressStaticGzip = require('express-static-gzip')
const fileUpload = require('express-fileupload');

const PORT = 3050;
app.use(express.static(path.join(__dirname, '../client/dist')))
//middleware
app.use(cors());  //need npm i cors
app.use(express.json())

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
     next();
});

app.use(fileUpload());

app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});




// app.use('/', expressStaticGzip(path.join(__dirname, '../client/dist')))




const vision = require('@google-cloud/vision');
// Creates a client
const client = new vision.ImageAnnotatorClient({
  keyFilename: "Vision IA-61a490ae8870.json"
});
// Performs label detection on the image file
client
  .labelDetection('/Users/justinguan/Desktop/HR/HRSF127/projects/MVP/server/uploads/01.jpeg')
    .then(results => {
        const labels = results[0].labelAnnotations;
        console.log('Labels:');
        data = labels.forEach(label => console.log(label.description));
  })
  .catch(err => {
    console.error('ERROR:', err);
  });





app.listen(PORT, console.log(`Server listening on port ${PORT}`))