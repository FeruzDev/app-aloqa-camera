import React from 'react';

const ContactLan = () => {
    return (
        <div className="contact-lan">
            <h1 className="l-title ">Contacts</h1>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <iframe
                            className="border-0 w-100 h-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.9313229055936!2d69.32945344130235!3d41.31487133851532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef51df7ab7efb%3A0xf4804a124dc3465f!2sCradle%20VISION!5e0!3m2!1sen!2s!4v1699211445855!5m2!1sen!2s"
                            allowFullScreen="" loading="lazy"
                            style={{borderRadius: "20px"}}
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-md-6">
                        <div className="contacts-box">
                            <h5>Form of application</h5>
                            <p>Fill the form to contact with you</p>
                            <label className="font-family-medium">Your name</label>
                            <input type="text" placeholder="Enter your name"/>
                            <label className="font-family-medium">Your number</label>
                            <input type="text" placeholder="Your number"/>
                            <label className="font-family-medium">Your message</label>
                            <textarea type="text" placeholder="Enter your message"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactLan;