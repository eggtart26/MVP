// // import React from "react";

// // import ImageUploader from 'react-images-upload';

// // class UploadImage extends React.Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = { 
// //             pictures: [] 
// //         };
// //         this.onDrop = this.onDrop.bind(this);
// //    }

// //    onDrop(picture) {
// //        this.setState({
// //            pictures: this.state.pictures.concat(picture),
// //        });
// //    }

// //    render() {
// //        return (
// //            <ImageUploader
// //                withIcon={true}
// //                buttonText='Choose images'
// //                onChange={this.onDrop}
// //                imgExtension={['.jpg', '.gif', '.png', '.gif']}
// //                maxFileSize={5242880}
// //            />
// //        );
// //    }

// // }

// // export default UploadImage;


// // class UploadImage extends React.Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = { 
// //             imageInput: this.props.imageInput,
// //         };
// //         this.fileSelecteHandler = this.fileSelecteHandler.bind(this);
// //    }

// //  fileSelecteHandler(event) {
// //      this.setState({
// //         imageInput: event.target.files[0]
// //      })
// //  }



// //    render() {

// //        console.log(this.state.imageInput)
// //        return (
// //            <div>
// //             <input type='file' onChange={this.fileSelecteHandler}/>

// //            </div>
// //        );
// //    }

// // }

// // export default UploadImage;




// /////////////////////////////
// // import React from "react";
// import React, { Fragment, useState } from 'react';
// // const file = require('file-system');
// // const fs = require('browserify-fs');
// // const base64ToImage = require('base64-to-image');
// const base64Img = require('base64-img');
// import axios from 'axios' 

// class UploadImage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { file: '', imagePreviewUrl: '', fileName: '01.jpeg' };
//     }

// //     _handleSubmit(e) {
// //         e.preventDefault();
// //         // TODO: do something with -> this.state.file
// //         console.log('handle uploading-', this.state.file);
// //         console.log('handle uploading-', this.state.imagePreviewUrl);
// //         var img = this.state.imagePreviewUrl
// //         // strip off the data: url prefix to get just the base64-encoded bytes
// //         // var data = img.toString().replace(/^data:image\/[a-z]+;base64,/, "");
// //         // var buf = new Buffer(data, 'base64');
// //         // fs.writeFile('/Users/justinguan/Desktop/HR/HRSF127/projects/MVP/saveImage/01.jpeg', buf);

// //         // https://stackoverflow.com/questions/6926016/nodejs-saving-a-base64-encoded-image-to-disk

// //         // const base64Str = img;
// //         // const path = '/Users/justinguan/Desktop/HR/HRSF127/projects/MVP/saveImage/'; // Add trailing slash
// //         // const optionalObj = { fileName: '', type: '' };
// //         // base64ToImage(base64Str,path,optionalObj); 

// //         const fd = new FormData();
// //         fd.append("01.jpeg", this.state.imagePreviewUrl);
// //         axios.post("http://localhost:3050/saveImage/01.jpeg", fd, {
// //           onUploadProgress: progressEvent => {
// //             console.log("upload progress " + Math.round((progressEvent.loaded / progressEvent.total)*100) + "%");
// //           }
// //         })
// //         .then(res => {
// //           console.log(res);
// //         });

// //         //////background.jpg

// //         // const data = img;
// //         // const destpath = '/Users/justinguan/Desktop/HR/HRSF127/projects/MVP/saveImage';
// //         // const filename = '01.jpeg';
        
// //         // base64Img.img(data, destpath, filename, (err, filepath) => {}); 
// //         ////


// // //         var base64Data = img.replace(/^data:image\/[a-z]+;base64,/, "");
// // // fs.writeFile("../../../saveImage/", base64Data, 'base64', function(err) {
// // //   console.log(err);
// // // });

        
// // //         var image = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAA..kJggg==';

// // // var data = image.replace(/^data:image\/\w+;base64,/, '');

// // // fs.writeFile(fileName, data, {encoding: 'base64'}, function(err){
// // //   //Finished
// // // });
// //     }


// _handleSubmit(e) {
//         e.preventDefault();
//         const formData = new FormData();
//         const file = this.state.imagePreviewUrl
//         formData.append('file', file);
    
//         try {
//           const res = axios.post('/saveImage', formData, {
//             headers: {
//               'Content-Type': 'multipart/form-data'
//             },
//           });
//           const { fileName, filePath } = res.data;
//           setUploadedFile({ fileName, filePath });
//         //   setMessage('File Uploaded');
//         } 
//         catch (err) {
//           if (err) {
//             console.log('There was a problem with the server');
//           } else {
//             console.log(err.response.data.msg);
//           }
//         }

//     }


//     _handleImageChange(e) {
//         e.preventDefault();

//         let reader = new FileReader();
//         let file = e.target.files[0];

//         reader.onloadend = () => {
//             this.setState({
//                 file: file,
//                 imagePreviewUrl: reader.result
//             });
//         }

//         reader.readAsDataURL(file)
//     }

//     render() {
//         let { imagePreviewUrl } = this.state;
//         let $imagePreview = null;
//         if (imagePreviewUrl) {
//             $imagePreview = (<img src={imagePreviewUrl} />);
//         }


//         // string generated by canvas.toDataURL()



//         return (
//             <div >
//                 <form onSubmit={(e) => this._handleSubmit(e)}>
//                     <input className="fileInput" type="file" onChange={(e) => this._handleImageChange(e)} />
//                     <button className="submitButton" type="submit" onClick={(e) => this._handleSubmit(e)}>Upload Image</button>
//                 </form>
//                 <div className="imgPreview">
//                     {$imagePreview}
//                 </div>
//             </div>
//         )
//     }
// }
// export default UploadImage;



import React, { Fragment, useState } from 'react';
import axios from 'axios';

const UploadImage = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');

    const onChange = e => {
      console.log(e.target)
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
    };
    
  console.log('file',file)
  console.log('uploadFile',uploadedFile)
  
    const onSubmit = async e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('file', file);
  
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
          setMessage('There was a problem with the server');
        } else {
          setMessage(err.response.data.msg);
        }
      }
    };
  
    return (
      <Fragment>
        <form onSubmit={onSubmit}>
          <div className='custom-file mb-4'>
            <input
              type='file'
              className='custom-file-input'
              id='customFile'
              onChange={onChange}
            />
          </div>
          <input
            type='submit'
            value='Upload'
            className='btn btn-primary btn-block mt-4'
          />
        </form>
        {uploadedFile ? (
          <div className='row mt-5'>
            <div className='col-md-6 m-auto'>
              <h3 className='text-center'>{`File uploaded: ${uploadedFile.fileName}`}</h3>
            </div>
          </div>
        ) : null}
      </Fragment>
    );
  };
  
  export default UploadImage;