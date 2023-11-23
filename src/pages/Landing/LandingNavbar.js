import React from 'react';
import PopupState, {bindMenu, bindTrigger} from "material-ui-popup-state";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {Link} from "react-router-dom";

const LandingNavbar = () => {
    return (
        <div className="landing-navbar">
            <nav className="navbar  navbar-expand-lg navbar-light bg-light">
                <div className="container ">
                    <a className="navbar-brand" href="#"><img src="/icon/homeLogo.svg" alt=""/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        {/*<span className="navbar-toggler-icon"></span>*/}
                        <img src="/icon/menuBurger.svg" alt=""/>
                    </button>
                    <div className="container collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav w-100 align-items-center justify-content-end">
                          <div className="d-flex cen-nav ">
                              <li className="nav-item">
                                  <a className="nav-link active" aria-current="page" href="#">Our target</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#">Work process</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#">Our team</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#">Contacts</a>
                              </li>
                          </div>
                          <div className="d-flex cen-right-nav ">
                              <div className="dropdown">
                                  <button className="cen-right-nav-btn " type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <span className="mr-8">EN</span>
                                      <img src="/icon/arrowlang.svg" style={{width: "14px"}} alt=""/>
                                  </button>
                                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                      <a className="dropdown-item" href="#">Russian</a>
                                      <a className="dropdown-item" href="#">English</a>
                                      <a className="dropdown-item" href="#">Uzbek</a>
                                  </div>
                              </div>
                          </div>
                            <li className=" sign-in-up ">
                                {/*<Link to="/login" className="nav-link" href="#">Login</Link>*/}

                                <div className="">
                                    <Link to="/regstration" className="nav-link Registration" href="#" >Sign up</Link>
                                    <Link to="/login" className="nav-link Login" href="#">Login</Link>
                                </div>
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