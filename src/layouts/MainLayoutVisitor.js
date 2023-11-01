import React from 'react';
import {Route, Switch} from "react-router-dom";
import VisitorNavbar from "../components/VisitorNavbar";
import VisitorSideBar from "../components/VisitorSideBar";
import Camera from "../pages/Camera";
import DetectCamera2 from "../pages/Camera/DetectCamera2";
import VisitorAnalytics from "../pages/VisitorAnalytics";
import VisitorComparasion from "../pages/VisitorComparasion";
import Servers from "../pages/Servers";
import Services from "../pages/Services";
import Rooms from "../pages/Camera/Rooms";
import CameraList from "../pages/Camera/CameraList";
import Deployments from "../pages/Deployments";
import DeploymentsDetail from "../pages/Deployments/DeploymentsDetail";
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
import Positions from "../hrPages/Positions";
import PositionAdd from "../hrPages/Positions/PositionAdd";
import PositionEdit from "../hrPages/Positions/PositionEdit";
import Branches from "../hrPages/Branches";
import BranchesAdd from "../hrPages/Branches/BranchesAdd";
import BranchesEdit from "../hrPages/Branches/BranchesEdit";
import JobTitle from "../hrPages/JobTitle";
import Logging from "../hrPages/Logging";
import SmartCamera from "../pages/Camera/SmartCamera";

const MainLayoutVisitor = () => {
    return (
        <div className="main-layout-design">

            <div className="left-side">
                <VisitorSideBar />
            </div>
            <div className="right-side">
                <VisitorNavbar />
                <Switch>
                    <Route path="/main/building" exact component={Camera} />
                    <Route path="/main/smart-camera" exact component={SmartCamera} />
                    <Route path="/main/building/:room_id" exact component={Rooms} />
                    <Route path="/main/building/:room_id/camera-list/:camera_id" exact component={CameraList} />
                    <Route path="/main/visitor-home" exact component={VisitorAnalytics} />
                    <Route path="/main/visitor-comparasion" exact component={VisitorComparasion} />
                    <Route path="/main/my-modules" exact component={Servers} />
                    <Route path="/main/services" exact component={Services} />
                    <Route path="/main/deployments" exact component={Deployments} />
                    <Route path="/main/deployments/:id" exact component={DeploymentsDetail} />
                    <Route path="/main/detect-camera/:id" exact component={DetectCamera2} />
                    {/*<Route path="/visitor-home/detect-camera" exact component={DetectCamera} />*/}

                    {/*<Route path="/" exact component={Home} />*/}
                    <Route path="/main/hr-admin/home-page-hr" exact component={Home} />
                    <Route path="/main/hr-admin/employees" exact component={Employees} />
                    <Route path="/main/hr-admin/employees/profile" exact component={Profile} />
                    <Route path="/main/hr-admin/employees/profile/edit" exact component={ProfileEdit} />
                    <Route path="/main/hr-admin/employees/profile/create" exact component={ProfileCreate} />
                    <Route path="/main/hr-admin/statistika" exact component={Statistika} />
                    <Route path="/main/hr-admin/statistika/detail" exact component={StatistikaDetail} />
                    <Route path="/main/hr-admin/audit" exact component={Audit} />
                    <Route path="/main/hr-admin/report" exact component={Reports} />
                    <Route path="/main/hr-admin/users" exact component={Users} />
                    <Route path="/main/hr-admin/users/edit" exact component={EditUser} />
                    <Route path="/main/hr-admin/users/add-user" exact component={AddUser} />
                    <Route path="/main/hr-admin/notification" exact component={Notification} />
                    <Route path="/main/hr-admin/notification/notification-edit" exact component={NotificationEdit} />
                    <Route path="/main/hr-admin/notification/notification-add" exact component={NotificationAdd} />
                    <Route path="/main/hr-admin/departments" exact component={Departments} />
                    <Route path="/main/hr-admin/departments/departments-edit" exact component={DepartmentsEdit} />
                    <Route path="/main/hr-admin/departments/departments-add" exact component={DepartmentsAdd} />
                    <Route path="/main/hr-admin/modes" exact component={Modes} />
                    <Route path="/main/hr-admin/modes/add" exact component={ModesAdd} />
                    <Route path="/main/hr-admin/modes/edit" exact component={ModesEdit} />
                    <Route path="/main/hr-admin/positions" exact component={Positions} />
                    <Route path="/main/hr-admin/positions/add" exact component={PositionAdd} />
                    <Route path="/main/hr-admin/positions/edit" exact component={PositionEdit} />
                    <Route path="/main/hr-admin/branches" exact component={Branches} />
                    <Route path="/main/hr-admin/branches/add" exact component={BranchesAdd} />
                    <Route path="/main/hr-admin/branches/edit/:id" exact component={BranchesEdit} />
                    <Route path="/main/hr-admin/job-title" exact component={JobTitle} />
                    <Route path="/main/hr-admin/logging" exact component={Logging} />


                </Switch>
            </div>

        </div>
    );
};

export default MainLayoutVisitor;