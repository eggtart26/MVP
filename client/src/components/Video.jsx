import React from 'react';
import ReactPlayer from 'react-player';
// const { youTubeSearch } = require('../../../server/youTubeSearch.js')
// import youTubeSearch from '../../../server/youTubeSearch.js'
import axios from 'axios';

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoId: null
        }

    }

    componentDidMount() {
        this.getFoodLabel()
      }

    handleError(error) {
        console.log(error);
      }

    getFoodLabel() {
        axios.get('youtubeId/1')
        .then(({ data }) => {
            this.setState({
              videoId: 'yMsToO3GGaU',
            });
            // console.log('fooditeem',this.state.foodItems)
          })
        //   .catch(this.handleError);
      }



    render(){
        const u = `https://www.youtube.com/watch?v=${this.state.videoId}`
        return(
            <div>
            <ReactPlayer url= 'https://www.youtube.com/watch?v=yMsToO3GGaU'/>
            </div>
        )
    }
}

export default Video;




