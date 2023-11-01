import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../hrPages/Home";
import Employees from "../hrPages/Employees";
import Profile from "../hrPages/Employees/Profile";
import ProfileEdit from "../hrPages/Employees/ProfileEdit";
import ProfileCreate from "../hrPages/Employees/ProfileCreate";
import Statistika from "../hrPages/Statistika";
import StatistikaDetail from "../hrPages/Statistika/StatistikaDetail";
import Audit from "../hrPages/Audit";
import Reports from "../hrPages/Reports";
import Users from "../hrPages/Users";
import EditUser from "../hrPages/Users/EditUser";
import AddUser from "../hrPages/Users/AddUser";
import Notification from "../hrPages/Notification";
import NotificationEdit from "../hrPages/Notification/NotificationEdit";
import NotificationAdd from "../hrPages/Notification/NotificationAdd";
import Departments from "../hrPages/Departments";
import DepartmentsEdit from "../hrPages/Departments/DepartmentsEdit";
import DepartmentsAdd from "../hrPages/Departments/DepartmentsAdd";
import Modes from "../hrPages/Modes";
import ModesAdd from "../hrPages/Modes/ModesAdd";
import ModesEdit from "../hrPages/Modes/ModesEdit";
import PositionAdd from "../hrPages/Positions/PositionAdd";
import Positions from "../hrPages/Positions";
import PositionEdit from "../hrPages/Positions/PositionEdit";
import Branches from "../hrPages/Branches";
import BranchesAdd from "../hrPages/Branches/BranchesAdd";
import BranchesEdit from "../hrPages/Branches/BranchesEdit";
import JobTitle from "../hrPages/JobTitle";
import Logging from "../hrPages/Logging";

const MainLayout = () => {
    return (
        <div className="main-layout-design">

            <div className="left-side">
            </div>
            <div className="right-side">
                <Switch>
                    {/*<Route path="/" exact component={Home} />*/}
                    {/*<Route path="/home/hr-admin/home-page-hr" exact component={Home} />*/}
                    {/*<Route path="/home/hr-admin/employees" exact component={Employees} />*/}
                    {/*<Route path="/home/hr-admin/employees/profile" exact component={Profile} />*/}
                    {/*<Route path="/home/hr-admin/employees/profile/edit" exact component={ProfileEdit} />*/}
                    {/*<Route path="/home/hr-admin/employees/profile/create" exact component={ProfileCreate} />*/}
                    {/*<Route path="/home/hr-admin/statistika" exact component={Statistika} />*/}
                    {/*<Route path="/home/hr-admin/statistika/detail" exact component={StatistikaDetail} />*/}
                    {/*<Route path="/home/hr-admin/audit" exact component={Audit} />*/}
                    {/*<Route path="/home/hr-admin/report" exact component={Reports} />*/}
                    {/*<Route path="/home/hr-admin/users" exact component={Users} />*/}
                    {/*<Route path="/home/hr-admin/users/edit" exact component={EditUser} />*/}
                    {/*<Route path="/home/hr-admin/users/add-user" exact component={AddUser} />*/}
                    {/*<Route path="/home/hr-admin/notification" exact component={Notification} />*/}
                    {/*<Route path="/home/hr-admin/notification/notification-edit" exact component={NotificationEdit} />*/}
                    {/*<Route path="/home/hr-admin/notification/notification-add" exact component={NotificationAdd} />*/}
                    {/*<Route path="/home/hr-admin/departments" exact component={Departments} />*/}
                    {/*<Route path="/home/hr-admin/departments/departments-edit" exact component={DepartmentsEdit} />*/}
                    {/*<Route path="/home/hr-admin/departments/departments-add" exact component={DepartmentsAdd} />*/}
                    {/*<Route path="/home/hr-admin/modes" exact component={Modes} />*/}
                    {/*<Route path="/home/hr-admin/modes/add" exact component={ModesAdd} />*/}
                    {/*<Route path="/home/hr-admin/modes/edit" exact component={ModesEdit} />*/}
                    {/*<Route path="/home/hr-admin/positions" exact component={Positions} />*/}
                    {/*<Route path="/home/hr-admin/positions/add" exact component={PositionAdd} />*/}
                    {/*<Route path="/home/hr-admin/positions/edit" exact component={PositionEdit} />*/}
                    {/*<Route path="/home/hr-admin/branches" exact component={Branches} />*/}
                    {/*<Route path="/home/hr-admin/branches/add" exact component={BranchesAdd} />*/}
                    {/*<Route path="/home/hr-admin/branches/edit" exact component={BranchesEdit} />*/}
                    {/*<Route path="/home/hr-admin/job-title" exact component={JobTitle} />*/}
                    {/*<Route path="/home/hr-admin/logging" exact component={Logging} />*/}



                </Switch>
            </div>

        </div>
    );
};

export default MainLayout;