import React from 'react';

const WhyUs = () => {
    return (
        <div className="why-us">
            <h1 className="l-title"> Why us</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="us-box">
                            <div className="us-box-img us-1">
                                <img src="/icon/us1.svg" alt="us"/>
                            </div>
                            <h2>
                                Usefull analytics
                            </h2>
                            <p>
                                Useful information means clear vision in your business
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="us-box">
                            <div className="us-box-img us-2">
                                <img src="/icon/us2.svg" alt="us"/>
                            </div>
                            <h2>
                                24/7 support
                            </h2>
                            <p>
                                Secure, fast and comfort services with all time support
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="us-box">
                            <div className="us-box-img us-3">
                                <img src="/icon/us3.svg" alt="us"/>
                            </div>
                            <h2>
                                Easy setup
                            </h2>
                            <p>
                                You can setup your cameras by clicking a bunch of buttons
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="us-box">
                            <div className="us-box-img us-4">
                                <img src="/icon/us4.svg" alt="us"/>
                            </div>
                            <h2>
                                Full control
                            </h2>
                            <p>
                                You can control your business in any distance
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;