import React from "react";
import Webcam from "react-webcam";
import ImageData from './ImageData.jsx';


const CamImage = (props) => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
  
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);
  
    return (
        
      <div>
        <Webcam
          audio={false}
          ref={webcamRef}
          height={240}
          width={360}
          screenshotFormat="image/jpeg"
        />
        <button onClick={capture}>Capture photo</button>
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
 