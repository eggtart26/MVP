import React from 'react';
// import ImageUploader from 'react-images-upload';



class ImageData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageInput: this.props.imageInput,
            getImage: this.props.getImage
        }
    }



    render() {
        return (
            <div>
            From ImageData
            </div>
        )
    }

}


export default ImageData;