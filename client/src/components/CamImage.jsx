// import React from "react";
import Webcam from "react-webcam";
import ImageData from './ImageData.jsx';
import React, { Fragment, useState } from 'react';
import axios from 'axios';
// var base64Img = require('base64-img');


const CamImage = (props) => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
    const [recordedChunks, setRecordedChunks] = React.useState([]);
 
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);


    console.log('setImgSrc',typeof(imgSrc))


    const [file, setFile] = useState('');
    const [uploadedFile, setUploadedFile] = useState({});

    const onChange = e => {
      // console.log(e.target,'e.target')
      setFile(imgSrc);
      setFilename('01.jpeg');
    };

    const handleSub =  e => {
      console.log('upload hit')
      e.preventDefault();
      // base64Img.img(imgSrc, '../../../server/uploads', '01.jpeg');
    };


    console.log('from cam', imgSrc)

    const handleDownload = React.useCallback(() => {
      if (imgSrc) {
        const blob = new Blob([imgSrc], {
          type: "image/jpeg"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = url;
        a.download = "01.jpeg";
        a.click();
        window.URL.revokeObjectURL(url);
        setImgSrc([]);
      }
    }, [imgSrc]);


    return (
        
      <div>
        <Webcam
          audio={false}
          ref={webcamRef}
          height={240}
          width={360}
          screenshotFormat="image/jpeg"
        />
      
        <div onChange={onChange}>
        <button onClick={capture}>Capture photo</button>
        </div>
        {imgSrc && (
          <button onClick={handleDownload}>Download</button>
        )}
        {imgSrc && (
            // props.imageInput={imgSrc},
            <img
              src={imgSrc}
            />
          )}
        <ImageData imgSrc={imgSrc}/>
        </div>
    );
  };
  
  export default CamImage;


 



/////////////////////////////////////////////////////
//   class Cam extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             // imageInput: ,
//         }
//     }

//   render() {
//     const webcamRef = React.useRef(null);
//     const [imgSrc, setImgSrc] = React.useState(null);
  
//     const capture = React.useCallback(() => {
//       const imageSrc = webcamRef.current.getScreenshot();
//       setImgSrc(imageSrc);
//     }, [webcamRef, setImgSrc]);

//     return (
//         <div>
//           <Webcam
//             audio={false}
//             ref={webcamRef}
//             height={240}
//             width={360}
//             screenshotFormat="image/jpeg"
//           />
//           <button onClick={capture}>Capture photo</button>
//           {imgSrc && (
//               <img
//                 src={imgSrc}
//               />
//             )}
//           </div>
//       );
//     }
//   };
  
//   export default Cam;
 
///////////////////////////////

// import React from "react";
// import Webcam from "react-webcam";

// class CamImage extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           imageData: null
//       }
//       setRef = (webcam) => {
//         this.webcam = webcam
//       }

//       capture = () => {
//         const imageSrc = this.webcam.getScreenshot();
//         this.setState({
//           imageData: imageSrc
//         })
//       }
      
//       onClickRetake = (e) => {
//         e.persist();
//         this.setState({
//           imageData: null
//         })
//       }

//       onClickSave = (e) => {
//         e.persist();
//         this.setState((previousState) => {
//           return {
//             saveImahe: !previousState.saveImage
//           }
//         })
//       }

//       handleChange = (e) => {
//         e.persist();
//         this.setState({
//           [e.target.name]: e.target.value
//         })
//       }

//       handleSaveSubmit = (e) => {
//         e.preventDefault();
//         let imageObject = {
//           image_name: this.state.image_name,
//           image_data: this.state.imageData
//         }
//         this.props.saveJobImage(imageObject)
//       }
//     }
//   }
      
//       export default CamImage;