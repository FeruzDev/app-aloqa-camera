import React from 'react';
const Live = () => {

    return (
        <div>
            <video id="test_video" controls autoPlay src="rtsp://admin:123456@192.168.0.168:554/stream_1"></video>
        </div>
);
};
export default Live;