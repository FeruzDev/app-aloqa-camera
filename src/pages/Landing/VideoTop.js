import React, {useState} from 'react';
import {Button, Modal} from "antd";

const VideoTop = () => {
    const [videoModal, setVideoModal] = useState(false)
    return (
        <div className="video-top">
           <div className="container">
               {/*<h1 className="l-title">System includes: Mobile app, Cameras, Admin panel...*/}
               {/*    Something gonna be written here...</h1>*/}
               {/*<div className="container">*/}
               {/*    <div className="video-box">*/}
               {/*        <video  loop autoPlay muted   >*/}
               {/*            <source src="/video/Comp2.mp4" type="video/mp4" />*/}
               {/*        </video>*/}

               {/*    </div>*/}
               {/*</div>*/}


               <div className="row">
                   <div className="col-md-5 l-title-top">
                       <h1 className="l-title-home">
                           Feel more
                       </h1>
                       <h1 className="l-title-home">
                           opportunities of <span>AI technologies!</span>
                       </h1>
                       <p className="l-sub-title">
                           Our goal is making progress in businesses and automation in running companies. Grow with us!
                       </p>
                   </div>
                   <div className="col-md-7 l-home-img">
                       <img src="/img/lanim.png" alt="img"/>
                   </div>
               </div>
               <div className="l-btns">
                   <button className="l-btn-start">
                       Get Started
                   </button>
                   <button className="l-btn-more" onClick={() => setVideoModal(true)}>
                   <img src="/icon/more.svg" alt=""/>
                       Learn more
                   </button>
               </div>

               <button className="teleg-btn">
                   <img src="/icon/teleg.svg" alt=""/>
               </button>
           </div>
            <Modal title="Video"
                   open={videoModal}
                   onCancel={() =>setVideoModal(false)}
                   width={1090}
                   footer={[

                       <Button key="submit" type="default" onClick={() => setVideoModal(false)}>
                           Cancel
                       </Button>
                   ]}
            >
                        <video  loop autoPlay muted className="w-100"  >
                            <source src="/video/Comp2.mp4" type="video/mp4" />
                        </video>
            </Modal>
        </div>
    );
};

export default VideoTop;