import React, {useEffect, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import axios from "axios";
import {API_PATH} from "./const";

const VisitorSideBar = () => {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);
    const [company, setCompany] = useState({})
    const pathname = window.location.pathname;
    // console.log(pathname);
    let history = useHistory()
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
        if (localStorage.getItem("for_com")){
            axios.get(API_PATH + "company/" + localStorage.getItem("for_com"), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
                .then(res => {
                    setCompany(res.data)
                    localStorage.setItem("name", res?.data?.name)
                    localStorage.setItem("description", res?.data?.description)
                    localStorage.setItem("phone", res?.data?.phone)
                    localStorage.setItem("email", res?.data?.email)
                    localStorage.setItem("id", res?.data?.id)
                    localStorage.setItem("owner_id", res?.data?.owner_id)
                })
        }
    }
    const logout = () => {
        history.push("/login")
        localStorage.clear()
    }
    useEffect(() => {
        getCompany()
    }, [])
    return (
        <div className="main-side-bar">
            <div className="my-side-fix">
                <div className="top-logo">
                    <Link to="/main/visitor-home">
                        {
                            company ?
                                <img src={company?.logo?.slice(0, 8) === "https://" ? company?.logo :( "https://" + company?.logo)} alt="..." className="logo-company"/>
                                :
                                <img src="/img/visitorLogo.png" className="logo-company" alt="..."/>
                        }
                    </Link>

                    </div>
                <div className="menu-list">
                    <div className="menu-list-item">
                        <List
                            sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                            <ListItemButton onClick={handleClick}>
                                <div className="link-item-style ">
                                    <img src="/icon/analys.svg" alt=""/>
                                    <span>Аналитика посетителей</span>
                                </div>
                                {open ? <img src="/icon/arrowup.png" className="arrow-up-down-size"/> :
                                    <img src="/icon/arrowdown.png" className="arrow-up-down-size"/>}
                            </ListItemButton>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{pl: 2}}  className={pathname === "/main/visitor-home" ? "link-item-style-active" : ""}>
                                        <Link to="/main/visitor-home" className="link-item-style ">
                                            <img src="/icon/datareport.png" alt=""/>
                                            <span>Аналитика</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 2}} className={pathname === "/main/visitor-comparasion" ? "link-item-style-active" : ""}>
                                        <Link to="/main/visitor-comparasion" className="link-item-style  ">
                                            <img src="/icon/donutchart.png" alt=""/>
                                            <span>Сравнение по филиалом</span>
                                        </Link>

                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>

                        <List
                            sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                            <ListItemButton onClick={handleClick3}>
                                <div className="link-item-style ">
                                    <img src="/icon/Icon10.svg" alt=""/>
                                    <span>HR</span>
                                </div>
                                {open3 ? <img src="/icon/arrowup.png" className="arrow-up-down-size"/> :
                                    <img src="/icon/arrowdown.png" className="arrow-up-down-size"/>}
                            </ListItemButton>
                            <Collapse in={open3} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{pl: 2}} className={pathname === "/main/hr-admin/home-page-hr" ? "link-item-style-active" : ""}>
                                        <Link to="/main/hr-admin/home-page-hr" className="link-item-style ">
                                            <img src="/icon/Icon1.svg" alt=""/>
                                            <span>HR аналитика</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 2}} className={pathname === "/main/hr-admin/departments" ? "link-item-style-active" : ""}>
                                        <Link to="/main/hr-admin/departments" className="link-item-style ">
                                            <img src="/icon/Icon10.svg" alt=""/>
                                            <span>Отделы</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 2}} className={pathname === "/main/hr-admin/employees" ? "link-item-style-active" : ""}>
                                        <Link to="/main/hr-admin/employees" className="link-item-style ">
                                            <img src="/icon/Icon2.svg" alt=""/>
                                            <span>Cотрудники</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 2}} className={pathname === "/main/hr-admin/modes" ? "link-item-style-active" : ""}>
                                        <Link to="/main/hr-admin/modes" className="link-item-style ">
                                            <img src="/icon/Icon11.svg" alt=""/>
                                            <span>Режимы</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 2}} className={pathname === "/main/hr-admin/audit" ? "link-item-style-active" : ""}>
                                        <Link to="/main/hr-admin/audit" className="link-item-style ">
                                            <img src="/icon/Icon6.svg" alt=""/>
                                            <span>Аудит</span>
                                        </Link>
                                    </ListItemButton>
                                    {/*<ListItemButton sx={{ pl: 2 }}>*/}
                                    {/*    <Link to="/main/hr-admin/logging" className="link-item-style ">*/}
                                    {/*        <img src="/icon/Icon6.svg" alt=""/>*/}
                                    {/*        <span>Логирование</span>*/}
                                    {/*    </Link>*/}
                                    {/*</ListItemButton>*/}

                                    {/*<ListItemButton sx={{ pl: 2 }}>*/}
                                    {/*    <Link to="/main/hr-admin/notification" className="link-item-style ">*/}
                                    {/*        <img src="/icon/Icon8.svg" alt=""/>*/}
                                    {/*        <span>Уведомления</span>*/}
                                    {/*    </Link>*/}
                                    {/*</ListItemButton>*/}
                                </List>
                            </Collapse>
                        </List>
                        <List
                            sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                            <ListItemButton onClick={handleClick4}>
                                <div className="link-item-style ">
                                    <img src="/icon/Live.svg" alt=""/>
                                    <span>Live</span>
                                </div>
                                {open4 ? <img src="/icon/arrowup.png" className="arrow-up-down-size"/> :
                                    <img src="/icon/arrowdown.png" className="arrow-up-down-size"/>}
                            </ListItemButton>
                            <Collapse in={open4} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{pl: 2}} className={pathname === "/main/live" ? "link-item-style-active" : ""}>
                                        <Link to="/main/live" className="link-item-style ">
                                            <img src="/icon/Live.svg" alt=""/>
                                            <span>Live</span>
                                        </Link>
                                    </ListItemButton>
                                    {
                                        localStorage.getItem("name") !== "Aloqa Bank" &&    localStorage.getItem("name") !== "Eman Materials"
                                        ?
                                            <>
                                                <ListItemButton sx={{pl: 2}} className={pathname === "/main/roi-employee" ? "link-item-style-active" : ""}>
                                                    <Link to="/main/roi-employee" className="link-item-style ">
                                                        <img src="/icon/roi_employee.svg" alt=""/>
                                                        <span>ROI Employee</span>
                                                    </Link>
                                                </ListItemButton>
                                                <ListItemButton sx={{pl: 2}} className={pathname === "/main/roi-visitor" ? "link-item-style-active" : ""}>
                                                    <Link to="/main/roi-employee" className="link-item-style ">
                                                        <img src="/icon/roi_visitor.svg" alt=""/>
                                                        <span>ROI Visitor</span>
                                                    </Link>
                                                </ListItemButton>
                                            </>
                                            :
                                            ""
                                    }
                                </List>
                            </Collapse>
                        </List>
                        <List
                            sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                            <ListItemButton onClick={handleClick5}>
                                <div className="link-item-style ">
                                    <img src="/icon/settings.svg" alt=""/>
                                    <span>Settings</span>
                                </div>
                                {open5 ? <img src="/icon/arrowup.png" className="arrow-up-down-size"/> :
                                    <img src="/icon/arrowdown.png" className="arrow-up-down-size"/>}
                            </ListItemButton>
                            <Collapse in={open5} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>

                                    {
                                        localStorage.getItem("name") !== "Eman Materials"
                                            ?
                                            <ListItemButton sx={{pl: 2}}  className={pathname === "/main/hr-admin/users" ? "link-item-style-active" : ""}>
                                                <Link to="/main/hr-admin/users" className="link-item-style ">
                                                    <img src="/icon/Icon7.svg" alt=""/>
                                                    <span>Пользователи</span>
                                                </Link>
                                            </ListItemButton>
                                            :
                                            ""
                                    }
                                    <ListItemButton sx={{pl: 2}}  className={pathname === "/main/hr-admin/branches" ? "link-item-style-active" : ""}>
                                        <Link to="/main/hr-admin/branches" className="link-item-style ">
                                            <img src="/icon/Icon9.svg" alt=""/>
                                            <span>Филиалы</span>
                                        </Link>
                                    </ListItemButton>

                                    {
                                        localStorage.getItem("name") !== "Eman Materials"
                                            ?
                                            <ListItemButton sx={{pl: 2}}  className={pathname === "/main/building" ? "link-item-style-active" : ""}>
                                                <Link to="/main/building" className="link-item-style  ">
                                                    <img src="/icon/camera2.svg" alt=""/>
                                                    <span>Cameras</span>
                                                </Link>
                                            </ListItemButton>
                                            :
                                            ""
                                    }
                                    <ListItemButton sx={{pl: 2}} className={pathname === "/main/smart-camera" ? "link-item-style-active" : ""}>
                                        <Link to="/main/smart-camera" className="link-item-style  ">
                                            <img src="/icon/camera2.svg" alt=""/>
                                            <span>Smart Camera</span>
                                        </Link>
                                    </ListItemButton>

                                    {
                                        localStorage.getItem("name") !== "Eman Materials"
                                            ?
                                            <>
                                                <ListItemButton sx={{pl: 2}}  className={pathname === "/main/my-modules" ? "link-item-style-active" : ""}>
                                                    <Link to="/main/my-modules" className="link-item-style  ">
                                                        <img src="/icon/server.svg" alt=""/>
                                                        <span>Servers</span>
                                                    </Link>
                                                </ListItemButton>
                                                <ListItemButton sx={{pl: 2}}  className={pathname === "/main/services" ? "link-item-style-active" : ""}>
                                                    <Link to="/main/services" className="link-item-style  ">
                                                        <img src="/icon/services.svg" alt=""/>
                                                        <span>Services</span>
                                                    </Link>
                                                </ListItemButton>
                                                <ListItemButton sx={{pl: 2}}  className={pathname === "/main/deployments" ? "link-item-style-active" : ""}>
                                                    <Link to="/main/deployments" className="link-item-style     ">
                                                        <img src="/icon/deployment.svg" alt=""/>
                                                        <span>Deployment</span>
                                                    </Link>
                                                </ListItemButton>
                                            </>
                                            :
                                            ""
                                    }

                                </List>
                            </Collapse>
                        </List>
                    </div>
                    <div className="menu-list-bottom">
                        <div className="left-img-center">
                           <div className="d-flex align-items-center">
                               <Link to="/home/job-title" className="left-img">
                                   {
                                       localStorage.getItem("image") === "null" ?
                                           <img src="/icon/profileUser.png"/>
                                           :
                                           <img src={localStorage.getItem("image")} alt="Avatar"/>
                                   }
                               </Link>
                               <div className="center-content">
                                   <h5 className="font-family-medium"><Link to="/home/job-title">  {
                                       localStorage.getItem("first_name") === "null" ?
                                           "User"
                                           :
                                           localStorage.getItem("first_name") + " " + localStorage.getItem("last_name")?.slice(0, 1) + "."
                                   }</Link></h5>
                                   <h6>
                                       {
                                           localStorage.getItem("phone_user") === "null" ?
                                               ""
                                               :
                                               localStorage.getItem("phone_user")
                                       }
                                   </h6>

                               </div>
                           </div>
                            <button onClick={logout}><img src="/icon/logout.svg" alt="logout"/></button>

                        </div>
                        {/*<div className="right-dot">*/}
                        {/*    <button type="submit"><img src="/icon/verdot.svg" alt="..."/></button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisitorSideBar;