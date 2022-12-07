import React from "react";
import videoBg from '../images/20-150x100.jpg'

const Video=()=>{
    return(
        <>
        {/* <div className="overlay"></div> */}
        <div className="main ">
            <video  autoplay loop muted >
            <source src={videoBg}  />
            </video>
        <div className="content">
            <h1>welcome</h1>
            <p>to my site</p>
        </div>
        </div>
        </>
    )
}
export default Video