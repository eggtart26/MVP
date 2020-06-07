import React from "react";

// import ImageUploader from 'react-images-upload';

// class UploadImage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             pictures: [] 
//         };
//         this.onDrop = this.onDrop.bind(this);
//    }

//    onDrop(picture) {
//        this.setState({
//            pictures: this.state.pictures.concat(picture),
//        });
//    }

//    render() {
//        return (
//            <ImageUploader
//                withIcon={true}
//                buttonText='Choose images'
//                onChange={this.onDrop}
//                imgExtension={['.jpg', '.gif', '.png', '.gif']}
//                maxFileSize={5242880}
//            />
//        );
//    }

// }

// export default UploadImage;


class UploadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            imageInput: this.props.imageInput,
        };
        this.fileSelecteHandler = this.fileSelecteHandler.bind(this);
   }
   
 fileSelecteHandler(event) {
     this.setState({
        imageInput: event.target.files[0]
     })
 }



   render() {
       console.log(this.state.imageInput)
       return (
           <div>
            <input type='file' onChange={this.fileSelecteHandler}/>
           </div>
       );
   }

}

export default UploadImage;