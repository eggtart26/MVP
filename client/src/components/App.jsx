import React from 'react';
import Input from './Input.jsx';
import axios from 'axios';
// import UploadImage from './UploadImage.jsx';
// import analyzeImage from '../analyzeImage.js'
// const { analyzeImage } = require('../analyzeImage.js')


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFood: false,
            foodItems: [],
        }
        // this.handleClick = this.handleClick.bind(this)
    }
    // handleError(error) {
    //     console.log(error);
    //   }

    // getAnalyze() {
    //     axios.get('/')
    //       .then(({ data }) => {
    //         console.log(data,'foodItems')
    //         this.setState({
    //           foodItems: data,
    //         });
    //       })
    //       .catch(this.handleError);
    //   }

    //   componentDidMount() {
    //     this.getAnalyze();
    //   }


    render() {
        return (
            <div>
            <Input 
            isFood={this.state.isFood}
            foodItems={this.state.foodItems}
            />
            </div>
        )
    }
} 


export default App;
