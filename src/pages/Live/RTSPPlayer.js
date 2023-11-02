import React, { useEffect } from 'react';
import {RTSPPlayer} from "html5_rtsp_player/src/rtsp_player";
// const RtspServer = require('node-rtsp-rtmp-server');

const RTSPPlayer2 = () => {
    // useEffect(() => {
    //     const server = new RtspServer({
    //         serverPort: 5554,
    //         mediaPort: 9994,
    //         rtmpPort: 1935,
    //     });
    //
    //     server.start();
    //
    //     const video = document.getElementById('test_video');
    //     video.src = 'rtsp://admin:123456@192.168.0.168/stream_0';
    //     video.play();
    // }, []);

    return (
        <div>
            <RTSPPlayer src = 'rtsp://admin:123456@192.168.0.168/stream_0'></RTSPPlayer>
            <video id="test_video" controls autoPlay />
        </div>
    );
};

export default RTSPPlayer2;