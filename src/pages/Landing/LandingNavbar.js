import React from 'react';
import PopupState, {bindMenu, bindTrigger} from "material-ui-popup-state";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {Link} from "react-router-dom";

const LandingNavbar = () => {
    return (
        <div className="landing-navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="/icon/homeLogo.svg" alt=""/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        {/*<span className="navbar-toggler-icon"></span>*/}
                        <img src="/icon/menuBurger.svg" alt=""/>
                    </button>
                    <div className="container collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About system</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Problem Solving</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Work flow</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Our team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Why us</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link" href="#">Login</Link>
                            </li>
                            {/*<PopupState variant="popover" popupId="demo-popup-menu">*/}
                            {/*    {(popupState) => (*/}
                            {/*        <>*/}
                            {/*            <Button   {...bindTrigger(popupState)}>*/}
                            {/*                <img src="/icon/ru.svg" alt=""/>*/}
                            {/*                <span className="lang-title font-family-medium">*/}
                            {/*                    Ру*/}
                            {/*               </span>*/}
                            {/*                <img src="/icon/arrowDown2.svg" alt=""/>*/}
                            {/*            </Button>*/}
                            {/*            <Menu {...bindMenu(popupState)}>*/}
                            {/*                <MenuItem onClick={popupState.close}>*/}
                            {/*                    <img src="/icon/ru.svg" alt=""/>*/}
                            {/*                    <span className="lang-title-item font-family-medium">*/}
                            {/*                    Ру*/}
                            {/*               </span></MenuItem>*/}
                            {/*                <MenuItem onClick={popupState.close}>*/}
                            {/*                    <img src="/icon/ru.svg" alt=""/>*/}
                            {/*                    <span className="lang-title-item font-family-medium">*/}
                            {/*                    Ру*/}
                            {/*               </span>*/}
                            {/*                </MenuItem>*/}
                            {/*                <MenuItem onClick={popupState.close}>*/}
                            {/*                    <img src="/icon/ru.svg" alt=""/>*/}
                            {/*                    <span className="lang-title-item font-family-medium">*/}
                            {/*                    Ру*/}
                            {/*               </span>*/}
                            {/*                </MenuItem>*/}
                            {/*            </Menu>*/}
                            {/*        </>*/}
                            {/*    )}*/}
                            {/*</PopupState>*/}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default LandingNavbar;