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
                                <img src="/img/t1.png" alt=".."/>
                            </div>
                            <h1>Sardorbek Atakhanov</h1>
                            <p>CEO and Cofounder</p>
                        </div>
                        <div className="img-box-per">
                            <div className="img-box-per-img">
                                <img src="/img/t2.png" alt=".."/>
                            </div>
                            <h1>Kamoliddin Soliev</h1>
                            <p> AI and ML Researcher
                                Proffessor</p>
                        </div>
                        <div className="img-box-per">
                            <div className="img-box-per-img">
                                <img src="/img/t3.png" alt=".."/>
                            </div>
                            <h1>Feruz Jalilov</h1>
                            <p>Frontend developer</p>
                        </div>
                        <div className="img-box-per">
                            <div className="img-box-per-img">
                                <img src="/img/t4.png" alt=".."/>
                            </div>
                            <h1>Ozodbek Ulashev</h1>
                            <p> AI and ML Researcher
                                Backend developer</p>
                        </div>
                        <div className="img-box-per">
                            <div className="img-box-per-img">
                                <img src="/img/t5.png" alt=".."/>
                            </div>
                            <h1>Urozboy Bozoboev</h1>
                            <p>Backend developer</p>
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
                                <img src="/img/t6.png" alt=".."/>
                            </div>
                            <h1>Ismoil Eshmukhammedov </h1>
                            <p> AI Researcher Back end developer</p>
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
            </div>
        </div>
    );
};

export default OurTeam;