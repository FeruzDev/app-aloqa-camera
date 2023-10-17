import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
const VisitorNavbar = () => {
    return (
        <div className="main-navbar">
            <div className="nac-fix-fc">
                <div className="left-nav">
                    <div className="cal-time">
                        <img src="/icon/calendar.svg" alt="calendar"/>
                        <span>5 октября</span>
                    </div>
                    <div className="cal-time">
                        <img src="/icon/timeclock.svg" alt="timeclock"/>
                        <span>9:45</span>
                    </div>
                </div>
                <div className="right-nav">
                    <div className="search-item">
                        <label htmlFor="searchItem"><img src="/icon/Icon6.svg" alt="loupe"/></label>
                        <input type="text" placeholder="Искать в админке"  id="searchItem"/>
                    </div>
                    <div className="lang-btn">
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <>
                                    <Button   {...bindTrigger(popupState)}>
                                        <img src="/icon/ru.svg" alt=""/>
                                        <span className="lang-title font-family-medium">
                                                Ру
                                           </span>
                                        <img src="/icon/arrowDown2.svg" alt=""/>
                                    </Button>
                                    <Menu {...bindMenu(popupState)}>
                                        <MenuItem onClick={popupState.close}>
                                            <img src="/icon/ru.svg" alt=""/>
                                            <span className="lang-title-item font-family-medium">
                                                Ру
                                           </span></MenuItem>
                                        <MenuItem onClick={popupState.close}>
                                            <img src="/icon/ru.svg" alt=""/>
                                            <span className="lang-title-item font-family-medium">
                                                Ру
                                           </span>
                                        </MenuItem>
                                        <MenuItem onClick={popupState.close}>
                                            <img src="/icon/ru.svg" alt=""/>
                                            <span className="lang-title-item font-family-medium">
                                                Ру
                                           </span>
                                        </MenuItem>
                                    </Menu>
                                </>
                            )}
                        </PopupState>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisitorNavbar;