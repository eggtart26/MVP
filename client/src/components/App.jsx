import React from 'react';
import Input from './Input.jsx';
// import UploadImage from './UploadImage.jsx';
// import analyzeImage from './analyzeImage.js'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFood: false,
            foodItems: ['apple'],
        }
        // this.handleClick = this.handleClick.bind(this)
    }
// handleClick () {
//     analyzeImage ()
// }


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
