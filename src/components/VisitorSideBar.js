import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import axios from "axios";
import {API_PATH, CONFIG} from "./const";

const VisitorSideBar = () => {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);
    const [company, setCompany] = useState({})

    const handleClick = () => {
        setOpen(!open);
        setOpen2(false);
        setOpen3(false);
        setOpen5(false);
    };
    const handleClick2 = () => {
        setOpen2(!open2);
        setOpen(false);
        setOpen3(false);
        setOpen4(false);
        setOpen5(false);
    };
    const handleClick3 = () => {
        setOpen3(!open3);
        setOpen(false);
        setOpen2(false);
        setOpen4(false);
        setOpen5(false);
    };
    const handleClick4 = () => {
        setOpen4(!open4);
        setOpen(false);
        setOpen2(false);
        setOpen3(false);
        setOpen5(false);
    };
    const handleClick5 = () => {
        setOpen5(!open5);
        setOpen(false);
        setOpen2(false);
        setOpen3(false);
        setOpen4(false);
    };

    const getCompany = () => {
        axios.get(API_PATH + "company/1" +
            " ", CONFIG)
            .then(res =>{
                setCompany(res.data)
                localStorage.setItem("name", res?.data?.name)
                localStorage.setItem("description", res?.data?.description)
                localStorage.setItem("phone", res?.data?.phone)
                localStorage.setItem("email", res?.data?.email)
                localStorage.setItem("id", res?.data?.id)
                localStorage.setItem("owner_id", res?.data?.owner_id)
            })
    }
    useEffect(() =>{
        getCompany()
    }, [])
    return (
        <div className="main-side-bar">
            <div className="my-side-fix">
                <div className="top-logo">
                    {
                        company ?
                            <img src={company?.logo} alt="..." className="logo-company" />
                            :
                            <img src="/img/visitorLogo.png"  className="logo-company" alt="..."/>

                    }
                    <button><img src="/icon/logout.svg" alt="logout"/></button>
                </div>
                <div className="menu-list">
                    <div className="menu-list-item">
                        <List
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                            <ListItemButton onClick={handleClick}>
                                <div  className="link-item-style ">
                                    <img src="/icon/analys.svg" alt=""/>
                                    <span>Аналитика посетителей</span>
                                </div>
                                {open ? <img src="/icon/arrowup.png" className="arrow-up-down-size" /> : <img src="/icon/arrowdown.png"  className="arrow-up-down-size"  />}
                            </ListItemButton>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/visitor-home" className="link-item-style ">
                                            <img src="/icon/bar.svg" alt=""/>
                                            <span>Аналитика</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/visitor-comparasion" className="link-item-style ">
                                            <img src="/icon/bar.svg" alt=""/>
                                            <span>Сравнение по филиалом</span>
                                        </Link>

                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                        <Link to="/main/hr-admin/home-page-hr" className="link-item-style">
                            <img src="/icon/Icon1.svg" alt=""/>
                            <span>HR аналитика</span>
                        </Link>
                        <List
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                            <ListItemButton onClick={handleClick3}>
                                <div  className="link-item-style ">
                                    <img src="/icon/Icon10.svg" alt=""/>
                                    <span>Отделы кадров</span>
                                </div>
                                {open3 ? <img src="/icon/arrowup.png" className="arrow-up-down-size" /> : <img src="/icon/arrowdown.png"  className="arrow-up-down-size"  />}
                            </ListItemButton>
                            <Collapse in={open3} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/hr-admin/departments" className="link-item-style">
                                            <img src="/icon/Icon10.svg" alt=""/>
                                            <span>Отделы</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/hr-admin/employees" className="link-item-style">
                                            <img src="/icon/Icon2.svg" alt=""/>
                                            <span>Cотрудники</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/hr-admin/users" className="link-item-style">
                                            <img src="/icon/Icon7.svg" alt=""/>
                                            <span>Пользователи</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/hr-admin/branches" className="link-item-style">
                                            <img src="/icon/Icon9.svg" alt=""/>
                                            <span>Филиалы</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/hr-admin/modes" className="link-item-style">
                                            <img src="/icon/Icon11.svg" alt=""/>
                                            <span>Режимы</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/hr-admin/audit" className="link-item-style">
                                            <img src="/icon/Icon6.svg" alt=""/>
                                            <span>Аудит</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/hr-admin/logging" className="link-item-style">
                                            <img src="/icon/Icon6.svg" alt=""/>
                                            <span>Логирование</span>
                                        </Link>
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/hr-admin/notification" className="link-item-style">
                                            <img src="/icon/Icon8.svg" alt=""/>
                                            <span>Уведомления</span>
                                        </Link>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                        <List
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                            <ListItemButton onClick={handleClick4}>
                                <div  className="link-item-style ">
                                    <img src="/icon/Live.svg" alt=""/>
                                    <span>Live</span>
                                </div>
                                {open4 ? <img src="/icon/arrowup.png" className="arrow-up-down-size" /> : <img src="/icon/arrowdown.png"  className="arrow-up-down-size"  />}
                            </ListItemButton>
                            <Collapse in={open4} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/live" className="link-item-style">
                                            <img src="/icon/live.svg" alt=""/>
                                            <span>Live</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/smart-camera" className="link-item-style ">
                                            <img src="/icon/camera2.svg" alt=""/>
                                            <span>Smart Camera</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/roi-employee" className="link-item-style">
                                            <img src="/icon/roi_employee.svg" alt=""/>
                                            <span>ROI Employee</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/roi-employee" className="link-item-style">
                                            <img src="/icon/roi_visitor.svg" alt=""/>
                                            <span>ROI Visitor</span>
                                        </Link>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                        <List
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                            <ListItemButton onClick={handleClick5}>
                                <div  className="link-item-style ">
                                    <img src="/icon/settings.svg" alt=""/>
                                    <span>Settings</span>
                                </div>
                                {open5 ? <img src="/icon/arrowup.png" className="arrow-up-down-size" /> : <img src="/icon/arrowdown.png"  className="arrow-up-down-size"  />}
                            </ListItemButton>
                            <Collapse in={open5} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/building" className="link-item-style ">
                                            <img src="/icon/camera2.svg" alt=""/>
                                            <span>Cameras</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/my-modules" className="link-item-style ">
                                            <img src="/icon/server.svg" alt=""/>
                                            <span>Servers</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/services" className="link-item-style ">
                                            <img src="/icon/services.svg" alt=""/>
                                            <span>Services</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/deployments" className="link-item-style ">
                                            <img src="/icon/deployment.svg" alt=""/>
                                            <span>Deployment</span>
                                        </Link>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
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