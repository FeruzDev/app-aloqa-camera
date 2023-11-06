import React from 'react';

const Solutions = () => {
    return (
        <div className="solutions">
            <div className="container">
                <h1 className="l-title">Solutions for real Problems</h1>
                <div className="row">
                    <div className="col-md-6">
                        <video loop autoPlay muted>
                            <source src="/video/vd1.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <div className="col-md-6  sol-box mt-0">
                        <div className="dol-box-item">
                            <h2 className="font-family-medium">Problem</h2>
                            <p>You do not know when your employee come to work and leave office. It is unfair to pay
                                your workers without knowing how much time they are really working and how much time
                                they are leaving their own workplace </p>

                            <h2 className="font-family-medium">Our solution</h2>
                            <p>We give you information about coming and leaving times of your employees. Our system will
                                track time when your employee leaves his own workplace and system will notify you after
                                fixed time. </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <video loop autoPlay muted>
                            <source src="/video/vd2.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <div className="col-md-6 sol-box mt-0">
                        <div className="dol-box-item">
                            <h2>Problem</h2>
                            <p>It is not clear data that how many clients visit to your office or shop. During peak
                                hours, customers may experience long wait times, leading to frustration and
                                dissatisfaction.
                            </p>

                            <h2>Our solution</h2>
                            <p>Get clear data about visitors age gender and peak hours. Manage peak hours. Target by
                                identifying your right audience. Collect data about your clients. </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Solutions;