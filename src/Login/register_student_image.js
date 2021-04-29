import React, { useState } from 'react';
import axios from "axios";
import Button from "@material-ui/core/Button";
import Webcam from 'react-webcam'
import Link from '@material-ui/core/Link';

const RegisterStudentImage = () => {

    const [image, setImage] = useState(null);
    const [imageData, setImageData] = useState(null);

    const url = "http://localhost:3000"

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
      
    const webcamRef = React.useRef(null);
    
    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            var base64data = imageSrc.replace("data:image/jpeg;base64,", "");
            //console.log("data: ", base64data);
            var bs = atob(base64data);
            var buffer = new ArrayBuffer(bs.length);
            var ba = new Uint8Array(buffer);
            for (var i = 0; i < bs.length; i++) {
                ba[i] = bs.charCodeAt(i);
            }
            var file = new File([ba], "image.jpeg", { type: "image/jpeg" });
            var blob = new Blob([ba], { type: "image/jpeg" });
            setImageData(URL.createObjectURL(blob));
            setImage(file);
        },
        [webcamRef]
    );
      

    const handleImageChange = (event) => {
        setImage(event.target.files[0])
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitted image: ", image);
        const form = new FormData();
        form.append('name', localStorage.getItem('name'));
        form.append('regno', localStorage.getItem('regno'));
        form.append('password', localStorage.getItem('password'));
        form.append('class_id', localStorage.getItem('class_id'));
        form.append('no_subj', localStorage.getItem('no_subj'));
        form.append('Images', image);
        axios
        .post(`http://192.168.68.110:5000/submitDetails/`, form, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then(response => {
            console.log(response);
            setImageData(null);
            setImage(null);
            window.location.replace(url);
            //history.push('/previewTest');
        })
        .catch(error => {
            console.log(error.response);
        });
    }

    return (
        <div align = "center" style = {{background: `#0f2027`, /* fallback for old browsers */
            background: `-webkit-linear-gradient(
              to right,
              #2c5364,
              #203a43,
              #0f2027
            )`, /* Chrome 10-25, Safari 5.1-6 */
            background: `linear-gradient(
              to right,
              #2c5364,
              #203a43,
              #0f2027
            )`}}>
            <h3><Link color="white" href="/" style={{textDecoration: "none", color: "white"}}>Look</Link> directly into camera and capture photo (or upload using upload file) </h3>
            <h3> Submit picture when satisfied </h3>
            {
                imageData ?
                <img src={imageData} alt="Image" />
                :
                <Webcam
                    audio={false}
                    height={720}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={1280}
                    videoConstraints={videoConstraints}
                    style = {{border:"4px solid white"}}
                />  
            }
            <br/><br/>
            {/* <button onClick={capture}>Capture photo</button> */}
            <Button
                    variant="contained"
                    component="label"
                    style={{ width: "20%"}}
                    onClick={capture}
                >
                    Capture photo
                </Button>
            <br/><br/>
            <form onSubmit={handleSubmit}>
                <Button
                    variant="contained"
                    component="label"
                    style={{ width: "20%"}}
                >
                    Upload File
                    <input
                        type="file"
                        hidden
                        onChange={handleImageChange}
                    />
                </Button> <br /> <br />
                <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ width: "20%"}}
                >
                    Submit Image
                </Button>
                <br/>
            </form>

            {/* <Button size="small" onClick={handleSubmit}>Submit</Button> */}
            
        </div>
    )
}

export default RegisterStudentImage
