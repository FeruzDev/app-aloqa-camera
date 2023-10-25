import React from 'react';

const LandingFooter = () => {
    return (
        <div className="landing-footer">
            <div className="container">
                <div className="foooter-top d-flex justify-content-between">
                    <h2 className="font-family-medium">Contacts</h2>
                    <img src="/icon/homeLogo.svg" alt=""/>
                </div>
                <div className="row menu-foot">
                    <div className="col-md-2">
                        <h3>Blogs</h3>
                        <a href="#!">About system</a>
                        <a href="#!">Our potential</a>
                        <a href="#!">Problem Solving</a>
                    </div>
                    <div className="col-md-2">
                        <h3></h3>
                        <a href="#!">Work flow</a>
                        <a href="#!">Our team</a>
                        <a href="#!">Why us</a>
                        <h3></h3>

                    </div>
                    <div className="col-md-4">
                        <h3>Contacts</h3>
                        <div className="foot-input">
                            <img src="/icon/phone.svg" alt=""/>
                            <input type="text" placeholder="Your number"/>
                        </div>
                        <textarea   placeholder="Your message"></textarea>
                        <button className="send-btn">Send <img src="/icon/arrowr.svg" alt="arrowr"/></button>
                    </div>
                    <div className="col-md-4">
                        <h3></h3>
                        <a href="#!"><img src="/icon/sms.svg" alt="img"/>tech@cradel-vision.com</a>
                        <a href="#!"><img src="/icon/phone.svg" alt="img"/>+998 99 166 06 95</a>
                        <a href="#!"><img src="/icon/location.svg" alt="img"/>131А Parkent Street, Tashkent 111301, Uzbekistan</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingFooter;