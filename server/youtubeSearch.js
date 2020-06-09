var YouTube = require('youtube-node');

var youTube = new YouTube();

youTube.setKey('AIzaSyAEJtCZ5aO6yxz8MZdl6tl92zUoc0UsJk4');
// var youTubeSearch =  function() {
 youTube.search('chicken potato', 2, function(error, result) {
  if (error) {
    console.log(error);
  }
  else {
    // console.log(JSON.stringify(result, null, 5));
    data = JSON.stringify(result.items[0].id.videoId, null, 2)

    console.log(data); 
    // const data = JSON.stringify(result, null, 2);
    // console.log(data);
    // const videoId = data.map(element => element);
    // console.log('videoId',videoId)
  }
}); 

// } 

// youTubeSearch()

// module.exports.youTubeSearch = youTubeSearch
// export default youTubeSearch;