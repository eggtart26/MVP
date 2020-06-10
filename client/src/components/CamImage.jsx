// import React from "react";
import Webcam from "react-webcam";
import ImageData from './ImageData.jsx';
import React, { Fragment, useState } from 'react';
import axios from 'axios';
// var base64Img = require('base64-img');



const CamImage = (props) => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
    // const [recordedChunks, setRecordedChunks] = React.useState([]);
    const [file, setFile] = useState('');
    const [uploadedFile, setUploadedFile] = useState({});

    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    const onChange = e => {
      console.log(e.target)
      console.log('you click me')
      setFile(e.target);
     
    };

    
    // const onChange = e => {
    //   // console.log(e.target,'e.target')
    //   setFile(imgSrc);
    //   // setFilename('01.jpeg');
    // };

    // const handleSub =  e => {
    //   console.log('upload hit')
    //   e.preventDefault();
    //   // base64Img.img(imgSrc, '../../../server/uploads', '01.jpeg');
    // };


    // const handleDownload = React.useCallback(() => {
    //   if (imgSrc) {
    //     const blob = new Blob([imgSrc], {
    //       type: "image/jpeg"
    //     });
    //     // const url = URL.createObjectURL(blob);
    //     // const a = document.createElement("a");
    //     // document.body.appendChild(a);
    //     // a.style = "display: none";
    //     // a.href = url;
    //     // a.download = "01.jpeg";
    //     // a.click();
    //     // window.URL.revokeObjectURL(url);
    //     // setImgSrc([]);
    //   }
    // }, [imgSrc]);

  //  convertBase64UrlToBlob  (imgSrc, type) { //将base64转换成可用formdata提交的文件,urlData base64的url,type 0图片 1视频 
  //     var bytes=window.atob(imgSrc.split(',')[1]);        //去掉url的头，并转换为byte 
  //     //处理异常,将ascii码小于0的转换为大于0  
  //     var ab = new ArrayBuffer(imgSrc.length);  
  //     var ia = new Uint8Array(ab);  
  //     for (var i = 0; i < bytes.length; i++) {  
  //       ia[i] = bytes.charCodeAt(i);  
  //     }  
  //     return new Blob( [ab] , {type : type == 0?'image/png':'image/mp4'});  
  //   }


    //  function dataURLtoFile(dataurl, filename) { //将base64转换为文件
    //     var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    //         bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    //     while(n--){
    //         u8arr[n] = bstr.charCodeAt(n);
    //     }
    //     return new File([u8arr], filename, {type:mime});
    // }



// https://blog.csdn.net/qq_41485414/article/details/96484665?utm_medium=distribute.pc_relevant.none-task-blog-baidujs-1
    // const dataURLtoBlob : function(dataurl) {
    //   let arr = dataurl.split(','),
    //     mime = arr[0].match(/:(.*?);/)[1],
    //     bstr = atob(arr[1]),
    //     n = bstr.length,
    //     u8arr = new Uint8Array(n);
    //   while(n--) {
    //     u8arr[n] = bstr.charCodeAt(n);
    //   }
    //   return new Blob([u8arr], {
    //     type: mime
    //   });
    // },

    // blobToFile : function(theBlob, fileName) {
    //   theBlob.lastModifiedDate = new Date();
    //   theBlob.name = fileName;
    //   return theBlob;
    // },


    
    // const dataURLtoBlob = function(a) {
    //   var arr = a.split(','),
    //     mime = arr[0].match(/:(.*?);/)[1],
    //     bstr = atob(arr[1]),
    //     n = bstr.length,
    //     u8arr = new Uint8Array(n);
    //   while (n--) {
    //     u8arr[n] = bstr.charCodeAt(n);
    //   }
    //   return new Blob([u8arr], { type: mime });
    // };
    // //将blob转换为file
    // const blobToFile = function(theBlob, fileName) {
    //   theBlob.lastModifiedDate = new Date();
    //   theBlob.name = fileName;
    //   return theBlob;
    // };
    // //调用
    // var blob = dataURLtoBlob(imgSrc);
    // var imgFile = blobToFile(blob, '01');
    // console.log('this is blobFile:', blob);



  //   const onSubmit = async e => {
  //     e.preventDefault();
  //     const formData = new FormData();
  //     formData.append('file', file);
  //     try {
  //       const res = await axios.post('/upload', formData, {
  //         headers: {
  //           'Content-Type': 'multipart/form-data'
  //         },
  //       }); 
  //       const { fileName, filePath } = res.data;
  //       setUploadedFile({ fileName, filePath });
  //       setMessage('File Uploaded');
  //     } catch (err) {
  //       if (err.response.status === 500) {
  //         console.log('There was a problem with the server');
  //       } else {
  //         console.log(err.response.data.msg);
  //       }
  //     }
  //   };

  
  //   return (
        
  //     <div>
  //       <Webcam
  //         audio={false}
  //         ref={webcamRef}
  //         height={240}
  //         width={360}
  //         screenshotFormat="image/jpeg"
  //       />
      

  //       <button onClick={capture}>Capture photo</button>

  //       {imgSrc && (
  //         <button onClick={onSubmit}>Download</button>
  //       )}
  //       {imgSrc && (
  //           // props.imageInput={imgSrc},
  //           <div >
  //           <img onClick={onChange}
  //             src={imgSrc}
  //           />
  //           </div>
  //         )}
  //       <ImageData imgSrc={imgSrc}/>
  //       </div>
  //   );
  // };

  // export default CamImage;







  const onSubmit = async e => {
    e.preventDefault();
    const dataURLtoBlob = function(imgSrc) {
      var arr = imgSrc.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    };
    //将blob转换为file
    const blobToFile = function(theBlob, fileName) {
      theBlob.lastModifiedDate = new Date();
      theBlob.name = fileName;
      return theBlob;
    };
    //调用
    var blob = dataURLtoBlob(imgSrc);
    var imgFile = blobToFile(blob, '01');
    console.log('this is blobFile:', blob);
    console.log('this is imgFile:', imgFile);
    const formData = new FormData();
    formData.append('file', imgFile);
    console.log('this is formData', formData)
    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
      setMessage('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        console.log('There was a problem with the server');
      } else {
        console.log(err.response.data.msg);
      }
    }
  };

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
          <button onClick={onSubmit}>Download</button>
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





// /////////////////////////////////////////////////////
// //   class Cam extends React.Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             // imageInput: ,
// //         }
// //     }

// //   render() {
// //     const webcamRef = React.useRef(null);
// //     const [imgSrc, setImgSrc] = React.useState(null);
  
// //     const capture = React.useCallback(() => {
// //       const imageSrc = webcamRef.current.getScreenshot();
// //       setImgSrc(imageSrc);
// //     }, [webcamRef, setImgSrc]);

// //     return (
// //         <div>
// //           <Webcam
// //             audio={false}
// //             ref={webcamRef}
// //             height={240}
// //             width={360}
// //             screenshotFormat="image/jpeg"
// //           />
// //           <button onClick={capture}>Capture photo</button>
// //           {imgSrc && (
// //               <img
// //                 src={imgSrc}
// //               />
// //             )}
// //           </div>
// //       );
// //     }
// //   };
  
// //   export default Cam;
 
// ///////////////////////////////

// // import React from "react";
// // import Webcam from "react-webcam";

// // class CamImage extends React.Component {
// //   constructor(props) {
// //       super(props);
// //       this.state = {
// //           imageData: null
// //       }
// //       setRef = (webcam) => {
// //         this.webcam = webcam
// //       }

// //       capture = () => {
// //         const imageSrc = this.webcam.getScreenshot();
// //         this.setState({
// //           imageData: imageSrc
// //         })
// //       }
      
// //       onClickRetake = (e) => {
// //         e.persist();
// //         this.setState({
// //           imageData: null
// //         })
// //       }

// //       onClickSave = (e) => {
// //         e.persist();
// //         this.setState((previousState) => {
// //           return {
// //             saveImahe: !previousState.saveImage
// //           }
// //         })
// //       }

// //       handleChange = (e) => {
// //         e.persist();
// //         this.setState({
// //           [e.target.name]: e.target.value
// //         })
// //       }

// //       handleSaveSubmit = (e) => {
// //         e.preventDefault();
// //         let imageObject = {
// //           image_name: this.state.image_name,
// //           image_data: this.state.imageData
// //         }
// //         this.props.saveJobImage(imageObject)
// //       }
// //     }
// //   }
      
// //       export default CamImage;




//////////////////////////////////////////////////

// import React, { Fragment, useState } from 'react';
// import Webcam from "react-webcam";
 
// // const CamImage = (props) => {
 
// const videoConstraints = {
//   width: 360,
//   height: 240,
//   facingMode: "user"
// };
 
//   class CamImage extends React.Component {
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
  
 
//   export default CamImage;