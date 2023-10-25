import React from 'react';

const OurProducts = () => {
    return (
        <div className="out-potntial">
            <div className="container">
                <h1 className="l-title">Our Products</h1>
                <div className="row mt-40">
                    <div className="col-md-4">
                        <div className="bg-back-box">
                            <div className="pot-img">
                                <img src="/img/p1.png" alt="img"/>
                            </div>
                            <div className="pot-box">
                                <h2>Face Recognition</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been the industry's standard dummy text ever since the1500s, when an unknown printer took a
                                    galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="bg-back-box">
                            <div className="pot-img">
                                <img src="/img/p2.png" alt="img"/>
                            </div>
                            <div className="pot-box">
                                <h2>Waiting time</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been the industry's standard dummy text ever since the1500s, when an unknown printer took a
                                    galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bg-back-box">
                            <div className="pot-img">
                                <img src="/img/p3.png" alt="img"/>
                            </div>
                            <div className="pot-box">
                                <h2>Visitor counting</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been the industry's standard dummy text ever since the1500s, when an unknown printer took a
                                    galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line-landing" />

            </div>
        </div>
    );
};

export default OurProducts;