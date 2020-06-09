import React from 'react';
import Input from './Input.jsx';
import ResultBox from './ResultBox.jsx';
import axios from 'axios';
// import Recipes from './Recipes.jsx';
import Video from './Video.jsx';
// import UploadImage from './UploadImage.jsx';
// import analyzeImage from '../analyzeImage.js'
// const { analyzeImage } = require('../../../server/index.js')


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFood: false,
            foodItems: [], //fake ["apple","chicken"]
        }
        // this.handleClick = this.handleClick.bind(this)
        this.refreshPage = this.refreshPage.bind(this)
    }
    // componentDidMount() {
    //     this.getFoodLabel()
    //   }

    // handleError(error) {
    //     console.log(error);
    //   }

    // getFoodLabel() {
    //     axios.get('/data/0')
    //     .then(({ data }) => {
    //         this.setState({
    //           foodItems: data,
    //         });
    //         // console.log('fooditeem',this.state.foodItems)
    //       })
    //       .catch(this.handleError);
    //   }
    
// clickMe(){

// }
refreshPage() {
    window.location.reload(false);
  }

    render() {
        if(this.state.foodItems !== []) {
            console.log('fooditeem',this.state.foodItems)
            return (
                <div className="main">
                

                <div className="mainChild1">
                <Input 
                isFood={this.state.isFood}
                foodItems={this.state.foodItems}
                />
                <ResultBox foodItems={this.state.foodItems}/>
                </div>
         



                <button onClick={this.refreshPage}>Detect Items</button>
                <div className="mainChild2">
                <Video />
                </div>
               
    
                </div>
            )
        }

    }
} 


export default App;
