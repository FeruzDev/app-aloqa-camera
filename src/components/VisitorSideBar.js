import React from 'react';
import {Link} from "react-router-dom";

const VisitorSideBar = () => {
    return (
        <div className="main-side-bar">
            <div className="my-side-fix">
                <div className="top-logo">
                    <img src="/img/visitorLogo.png" alt=""/>
                    <button><img src="/icon/logout.svg" alt="logout"/></button>
                </div>
                <div className="menu-list">
                    <div className="menu-list-item">
                        <Link to="/home-visitor" className="link-item-style link-item-style-active">
                            <img src="/icon/bar.svg" alt=""/>
                            <span>Аналитика посетителей</span>
                        </Link>
                        <Link to="/home-camera" className="link-item-style">
                            <img src="/icon/camera.svg" alt=""/>
                            <span>Камера</span>
                        </Link>

                    </div>
                    <div className="menu-list-bottom">
                        <div className="left-img-center">
                            <Link to="/home/job-title" className="left-img">
                                <img src="/icon/Avatar.png" alt="Avatar"/>
                            </Link>
                            <div className="center-content">
                                <h5 className="font-family-medium"><Link to="/home/job-title">Shoxrux R.</Link></h5>
                                <h6> 99 877 34 22</h6>
                            </div>
                        </div>
                        <div className="right-dot">
                            <button type="submit"><img src="/icon/verdot.svg" alt="..."/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisitorSideBar;