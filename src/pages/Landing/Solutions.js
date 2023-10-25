import React from 'react';

const Solutions = () => {
    return (
        <div className="solutions">
            <div className="container">
                <h1 className="l-title">Solutions for real Problems</h1>
                <div className="row">
                    <div className="col-md-6">
                        <video loop autoPlay muted>
                            <source src="/vid1.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <div className="col-md-6  sol-box mt-0">
                        <div className="dol-box-item">
                            <h2>Problem</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's </p>

                            <h2>Our solution</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <video loop autoPlay muted>
                            <source src="/vid1.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <div className="col-md-6 sol-box mt-0">
                        <div className="dol-box-item">
                            <h2>Problem</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's </p>

                            <h2>Our solution</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's </p>
                        </div>
                    </div>
                </div>
                <div className="line-landing" />
                
            </div>
        </div>
    );
};

export default Solutions;