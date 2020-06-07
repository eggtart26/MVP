import React from 'react';
import Cam from './CamImage.jsx';
import ImageData from './ImageData.jsx';
import UploadImage from './UploadImage.jsx';


class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFood: this.props.isFood,
            foodItems: this.props.foodItems,
            imageInput: null,
            getImage: false,
        }

        
    }
    render() {
        console.log(this.state.foodItems)
        console.log(this.state.imageInput,'input imageinput')
        return (
            <div>
            <Cam 
            // imageInput={this.state.imageInput}
            />
            <ImageData 
            imageInput={this.state.imageInput}
            getImage={this.state.getImage}
            />
            <UploadImage 
            imageInput={this.state.imageInput}
            />
            </div>
        )
    }
} 


export default Input;