import React from 'react';
import Slider from "react-slick";

const OurTeam = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="our-team mb-4">
            <h1 className="l-title">Our team</h1>
            <div className="container">
                <div className="deck-team">
                    <div className="row justify-content-center">
                        <div className="img-box-per">
                            <div className="img-box-per-img">
                                <img src="/img/per1.png" alt=".."/>
                            </div>
                            <h1>Shokhrukh Rakhmatov</h1>
                            <p>Project manager</p>
                        </div>
                        <div className="img-box-per">
                            <div className="img-box-per-img">
                                <img src="/img/per1.png" alt=".."/>
                            </div>
                            <h1>Shokhrukh Rakhmatov</h1>
                            <p>Project manager</p>
                        </div>
                        <div className="img-box-per">
                            <div className="img-box-per-img">
                                <img src="/img/per1.png" alt=".."/>
                            </div>
                            <h1>Shokhrukh Rakhmatov</h1>
                            <p>Project manager</p>
                        </div>
                        <div className="img-box-per">
                            <div className="img-box-per-img">
                                <img src="/img/per1.png" alt=".."/>
                            </div>
                            <h1>Shokhrukh Rakhmatov</h1>
                            <p>Project manager</p>
                        </div>
                        <div className="img-box-per">
                            <div className="img-box-per-img">
                                <img src="/img/per1.png" alt=".."/>
                            </div>
                            <h1>Shokhrukh Rakhmatov</h1>
                            <p>Project manager</p>
                        </div>
                        <div className="img-box-per">
                            <div className="img-box-per-img">
                                <img src="/img/per1.png" alt=".."/>
                            </div>
                            <h1>Shokhrukh Rakhmatov</h1>
                            <p>Project manager</p>
                        </div>
                        <div className="img-box-per">
                            <div className="img-box-per-img">
                                <img src="/img/per1.png" alt=".."/>
                            </div>
                            <h1>Shokhrukh Rakhmatov</h1>
                            <p>Project manager</p>
                        </div>
                    </div>

                </div>
                <div className="mobile-team">
                    <Slider {...settings}>
                        <div className="img-box-per">
                            <div className="img-box-per-img">
                                <img src="/img/per1.png" alt=".."/>
                            </div>
                            <h1>Shokhrukh Rakhmatov</h1>
                            <p>Project manager</p>
                        </div>
                        <div className="img-box-per">
                            <div className="img-box-per-img">
                                <img src="/img/per1.png" alt=".."/>
                            </div>
                            <h1>Shokhrukh Rakhmatov</h1>
                            <p>Project manager</p>
                        </div>
                        <div className="img-box-per">
                            <div className="img-box-per-img">
                                <img src="/img/per1.png" alt=".."/>
                            </div>
                            <h1>Shokhrukh Rakhmatov</h1>
                            <p>Project manager</p>
                        </div>
                        <div className="img-box-per">
                            <div className="img-box-per-img">
                                <img src="/img/per1.png" alt=".."/>
                            </div>
                            <h1>Shokhrukh Rakhmatov</h1>
                            <p>Project manager</p>
                        </div>
                        <div className="img-box-per">
                            <div className="img-box-per-img">
                                <img src="/img/per1.png" alt=".."/>
                            </div>
                            <h1>Shokhrukh Rakhmatov</h1>
                            <p>Project manager</p>
                        </div>
                        <div className="img-box-per">
                            <div className="img-box-per-img">
                                <img src="/img/per1.png" alt=".."/>
                            </div>
                            <h1>Shokhrukh Rakhmatov</h1>
                            <p>Project manager</p>
                        </div>
                        <div className="img-box-per">
                            <div className="img-box-per-img">
                                <img src="/img/per1.png" alt=".."/>
                            </div>
                            <h1>Shokhrukh Rakhmatov</h1>
                            <p>Project manager</p>
                        </div>
                    </Slider>
                </div>
                <div className="line-landing" />
            </div>
        </div>
    );
};

export default OurTeam;