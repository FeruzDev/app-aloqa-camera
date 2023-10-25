import React from 'react';

const VideoTop = () => {
    return (
        <div className="video-top">
           <div className="container">
               <h1 className="l-title">System includes: Mobile app, Cameras, Admin panel... <br/>
                   Something gonna be written here...</h1>
               <div className="container">
                   <div className="video-box">
                       <video  loop autoPlay muted   >
                           <source src="/video/Comp2.mp4" type="video/mp4" />
                       </video>

                   </div>
               </div>
               <div className="line-landing" />

           </div>
        </div>
    );
};

export default VideoTop;