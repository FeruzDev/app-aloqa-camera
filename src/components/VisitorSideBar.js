import React from 'react';
import {Link} from "react-router-dom";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

const VisitorSideBar = () => {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    const handleClick2 = () => {
        setOpen2(!open2);
    };
    return (
        <div className="main-side-bar">
            <div className="my-side-fix">
                <div className="top-logo">
                    <img src="/img/visitorLogo.png" alt=""/>
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
                                            <span>Аналитика посетителей</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/visitor-comparasion" className="link-item-style ">
                                            <img src="/icon/bar.svg" alt=""/>
                                            <span>Аналитика Сравнение</span>
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
                            <ListItemButton onClick={handleClick2}>
                                <div  className="link-item-style ">
                                    <img src="/icon/analys.svg" alt=""/>
                                    <span>Hr Admin</span>
                                </div>
                                {open2 ? <img src="/icon/arrowup.png" className="arrow-up-down-size" /> : <img src="/icon/arrowdown.png"  className="arrow-up-down-size"  />}
                            </ListItemButton>
                            <Collapse in={open2} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/hr-admin/home-page-hr" className="link-item-style">
                                            <img src="/icon/Icon1.svg" alt=""/>
                                            <span>Главная страница</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/hr-admin/employees" className="link-item-style">
                                            <img src="/icon/Icon2.svg" alt=""/>
                                            <span>Cотрудники</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/hr-admin/statistika" className="link-item-style">
                                            <img src="/icon/Icon3.svg" alt=""/>
                                            <span>Статистика</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/hr-admin/report" className="link-item-style">
                                            <img src="/icon/Icon5.svg" alt=""/>
                                            <span> Отчеты</span>
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
                                        <Link to="/main/hr-admin/users" className="link-item-style">
                                            <img src="/icon/Icon7.svg" alt=""/>
                                            <span>Пользователи</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/hr-admin/notification" className="link-item-style">
                                            <img src="/icon/Icon8.svg" alt=""/>
                                            <span>Уведомления</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/hr-admin/branches" className="link-item-style">
                                            <img src="/icon/Icon9.svg" alt=""/>
                                            <span>Филиалы</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/hr-admin/departments" className="link-item-style">
                                            <img src="/icon/Icon10.svg" alt=""/>
                                            <span>Отделы</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <Link to="/main/hr-admin/modes" className="link-item-style">
                                            <img src="/icon/Icon11.svg" alt=""/>
                                            <span>Режимы</span>
                                        </Link>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 2 }}>

                                        <Link to="/main/hr-admin/positions" className="link-item-style">
                                            <img src="/icon/Icon12.svg" alt=""/>
                                            <span>Должность</span>
                                        </Link>
                                    </ListItemButton>
                                    {/*<ListItemButton sx={{ pl: 2 }}>*/}
                                    {/*    <Link to="/main/hr-admin/home-page" className="link-item-style">*/}
                                    {/*        <img src="/icon/Icon4.svg" alt=""/>*/}
                                    {/*        <span>Аналитика</span>*/}
                                    {/*    </Link>*/}
                                    {/*</ListItemButton>*/}
                                </List>
                            </Collapse>
                        </List>
                        {/*<Link to="/home-visitor" className="link-item-style ">*/}
                        {/*    <img src="/icon/back.svg" alt=""/>*/}
                        {/*    <span>Back side</span>*/}
                        {/*</Link>*/}
                        <Link to="/main/building" className="link-item-style ">
                            <img src="/icon/camera2.svg" alt=""/>
                            <span>Cameras</span>
                        </Link>
                        <Link to="/main/my-modules" className="link-item-style ">
                            <img src="/icon/server.svg" alt=""/>
                            <span>Servers</span>
                        </Link>
                        <Link to="/main/services" className="link-item-style ">
                            <img src="/icon/services.svg" alt=""/>
                            <span>Services</span>
                        </Link>
                        <Link to="/main/deployments" className="link-item-style ">
                            <img src="/icon/deployment.svg" alt=""/>
                            <span>Deployment</span>
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