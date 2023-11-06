import React from 'react';

const OurProducts = () => {
    return (
        <div className="out-potntial-pro">
            <div className="container">
                <h1 className="l-title">Our Products</h1>
                <div className="row ">
                    <div className="col-md-4 mt-40">
                        <div className="bg-back-box">
                            <div className="pot-img">
                                <img src="/img/p11.png" alt="img"/>
                            </div>
                            <div className="pot-box">
                                <h2 className="font-family-medium">Face Recognition</h2>
                                <p>It counts only clients not employee and work with unique ID theory. It means one
                                    person is not counted twice when he enter two times within 20 minutes</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="bg-back-box">
                            <div className="pot-img">
                                <img src="/img/p12.png" alt="img"/>
                            </div>
                            <div className="pot-box">
                                <h2 className="font-family-medium">Waiting time</h2>
                                <p>It identifies people by entering dates to your database. You can create new employee
                                    in your admin panel by entering required information and a clear photo of your new
                                    employee. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bg-back-box">
                            <div className="pot-img">
                                <img src="/img/p13.png" alt="img"/>
                            </div>
                            <div className="pot-box">
                                <h2 className="font-family-medium">Visitor counting</h2>
                                <p>It helps to reduce waiting time. Cameras send info about how much time wait per
                                    visitor and how much time use your service</p>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    );
};

export default OurProducts;