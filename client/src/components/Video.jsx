import React from 'react';
import ReactPlayer from 'react-player';
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
              videoId: data,
            });
          })
      }
    render(){
        const u = `https://www.youtube.com/watch?v=${this.state.videoId}`
        return(
            <div>
            <ReactPlayer url= {u}/>
            </div>
        )
    }
}
export default Video;