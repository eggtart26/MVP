const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path');
const fileUpload = require('express-fileupload');
const redis = require('redis');
var YouTube = require('youtube-node');
var _ = require('underscore');
// const apikey = require ('./youtubeAPI_config.js');

const PORT = process.env.PORT || 3050;

const REDIS_PORT = process.env.PORT || 6379;
const clientData = redis.createClient(REDIS_PORT);

app.use(express.static(path.join(__dirname, '../client/dist')))
//middleware

app.use(cors());  //need npm i cors
app.use(express.json())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  next();
});

// Cache middleware
cache = (req, res, next) => {
  clientData.get(req.params.id, (err, data) => {
    console.log(req.params);
    if (err) throw err;
    if (data !== null) {
      res.send(data);
    } else {
      next();
    }
  });
};


app.use(fileUpload());
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }
  const file = req.files.file;
  file.mv(`${__dirname}/uploads/01.jpeg`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: '01.jpeg', filePath: `/uploads/01.jpeg` });
  });

  const filePath = `${__dirname}/uploads/01.jpeg`;
  analyzeImage(filePath);
});



// // google vision #1 Label working
// const vision = require('@google-cloud/vision');
// // Creates a client
// var analyzeImage = function(filePath) {
//   let id = 0;
// const client = new vision.ImageAnnotatorClient({
//   keyFilename: "Vision IA-61a490ae8870.json"
// });
// // Performs label detection on the image file
// data = (
// client
//   .labelDetection(filePath)
//   .then(results => {
//     console.log(results)
//         const labels = results[0].labelAnnotations;
//         console.log('Labels:');
//         const fruitArr = labels.map(label => label.description);
//         console.log('arr',fruitArr);
//         clientData.setex(id, 300, JSON.stringify(fruitArr));
//         app.get('/data/:id', cache, (req, res) => {
//           res.send(fruitArr);
//         })
//   })
//   .catch(err => {
//     console.error('ERROR:', err);
//   })
// )
// }




// google vision #2 Object working
const vision = require('@google-cloud/vision');
var analyzeImage = async function (filePath) {
  const client = new vision.ImageAnnotatorClient({
    keyFilename: "Vision IA-61a490ae8870.json"
  });
  data = (
    client
      .labelDetection(filePath)
      .then(results => {
        // console.log(results)
        const labels = results[0].labelAnnotations;
        console.log('Labels:');
        const fruitArr = labels.filter(label => label.description === "Food");
        if (fruitArr.length === 0) {
          let id = 0;
          const result = [];
          result.push("Not Food, dont fool me, I am very Smart!!!!!")
          console.log("output", result)
          clientData.setex(id, 300, JSON.stringify(result));
          app.get('/data/:id', cache, (req, res) => {
            res.send(result);
          })
        } else {
          var analyzeImage1 = async (filePath) => {
            const [result] = await client.objectLocalization(filePath);
            const objects = result.localizedObjectAnnotations;
            console.log('this is result:', result);
            let imgId = 0;
            objects.forEach(object => {
              const foodsArr = objects.map(object => object.name);
              const uniqueFood = _.uniq(foodsArr);
              clientData.setex(imgId, 300, JSON.stringify(uniqueFood));
              app.get('/data/:id', cache, (req, res) => {
                res.send(uniqueFood);
              })
              var youTube = new YouTube();
              let keyword = uniqueFood.slice(0, 2) + ' cook recipe';
              let recipeId = 2;
              youTube.setKey(API_KEY);
              youTube.search(keyword, 2, function (error, result) {
                if (error) {
                  console.log(error);
                }
                else {
                  data = JSON.stringify(result.items[0].id.videoId, null, 2)
                  let videoId = 1;
                  clientData.setex(videoId, 300, data);
                  app.get('/youtubeId/:id', cache, (req, res) => {
                    res.send(data);
                    console.log(data);
                  })
                }
              });
            })
          }
          analyzeImage1(filePath);
        }
      })
  )
}






// /////////////////////////////////////////////////////////
// //Version #1 No is/not food detection:

// // // google vision #2 Object name working
// const vision = require('@google-cloud/vision');
// var analyzeImage = async function (filePath) {
//   let id = 0;
//   const client = new vision.ImageAnnotatorClient({
//     keyFilename: "Vision IA-61a490ae8870.json"
//   });

//   const [result] = await client.objectLocalization(filePath);
//   const objects = result.localizedObjectAnnotations;
//   objects.forEach(object => {
//     // console.log(object.name)
//     const foodsArr = objects.map(object => object.name)
//     // console.log(foodsArr)
//     const uniqueFood = _.uniq(foodsArr)
//     console.log(uniqueFood)

//     clientData.setex(id, 300, JSON.stringify(uniqueFood));
//     app.get('/data/:id', cache, (req, res) => {
//       res.send(uniqueFood);
//     })



//   var youTube = new YouTube();
//   let keyword = uniqueFood.slice(0, 3) + ' cook recipe';
//   console.log("keyword", keyword)

//   youTube.setKey(''); //AIzaSyCuuRdLCen51-c2JrKNTUjBgH7EthGlzyQ

//   youTube.search(keyword, 2, function (error, result) {
//     if (error) {
//       console.log(error);
//     }
//     else {
//       data = JSON.stringify(result.items[0].id.videoId, null, 2)
//       console.log("youtube result id",data)

//       let videoId = 1;
//       clientData.setex(videoId, 300, data);
//       app.get('/youtubeId/:id', cache, (req, res) => {
//         res.send(data);
//         console.log(data);
//       })
//     }
//   });


//   })
// }







app.listen(PORT, console.log(`Server listening on port ${PORT}`))



