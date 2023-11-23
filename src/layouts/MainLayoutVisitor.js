import   React from 'react';
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
import JobTitle from "../hrPages/JobTitle";
import Logging from "../hrPages/Logging";
import SmartCamera from "../pages/Camera/SmartCamera";
import Live from "../pages/Live";
import RoiEmployee from "../pages/RoiEmployee";
import RoiEmployeeAdd from "../pages/RoiEmployee/RoiEmployeeAdd";
import PrivateRoute from "../components/PrivateRoute"
const MainLayoutVisitor = () => {
    return (
        <div className="main-layout-design">

            <div className="left-side">
                <VisitorSideBar />
            </div>
            <div className="right-side">
                <VisitorNavbar />
                <Switch>
                    <PrivateRoute path="/main/live" exact component={Live} />
                    <PrivateRoute path="/main/roi-employee" exact component={RoiEmployee} />
                    <PrivateRoute path="/main/roi-employee/add" exact component={RoiEmployeeAdd} />
                    <PrivateRoute path="/main/building" exact component={Camera} />
                    <PrivateRoute path="/main/smart-camera" exact component={SmartCamera} />
                    <PrivateRoute path="/main/building/:room_id" exact component={Rooms} />
                    <PrivateRoute path="/main/building/:room_id/camera-list/:camera_id" exact component={CameraList} />
                    <PrivateRoute path="/main/visitor-home" exact component={VisitorAnalytics} />
                    <PrivateRoute path="/main/visitor-comparasion" exact component={VisitorComparasion} />
                    <PrivateRoute path="/main/my-modules" exact component={Servers} />-
                    <PrivateRoute path="/main/services" exact component={Services} />
                    <PrivateRoute path="/main/deployments" exact component={Deployments} />
                    <PrivateRoute path="/main/deployments/:id" exact component={DeploymentsDetail} />
                    <PrivateRoute path="/main/detect-camera/:id" exact component={DetectCamera2} />
                    {/*<PrivateRoute path="/visitor-home/detect-camera" exact component={DetectCamera} />*/}
                    {/*<PrivateRoute path="/" exact component={Home} />*/}
                    <PrivateRoute path="/main/hr-admin/home-page-hr" exact component={Home} />
                    <PrivateRoute path="/main/hr-admin/employees" exact component={Employees} />
                    <PrivateRoute path="/main/hr-admin/employees/profile" exact component={Profile} />
                    <PrivateRoute path="/main/hr-admin/employees/profile/edit/:id" exact component={ProfileEdit} />
                    <PrivateRoute path="/main/hr-admin/employees/profile/create" exact component={ProfileCreate} />
                    <PrivateRoute path="/main/hr-admin/statistika" exact component={Statistika} />
                    <PrivateRoute path="/main/hr-admin/statistika/detail" exact component={StatistikaDetail} />
                    <PrivateRoute path="/main/hr-admin/audit" exact component={Audit} />
                    <PrivateRoute path="/main/hr-admin/report" exact component={Reports} />
                    <PrivateRoute path="/main/hr-admin/users" exact component={Users} />
                    <PrivateRoute path="/main/hr-admin/users/edit" exact component={EditUser} />
                    <PrivateRoute path="/main/hr-admin/users/add-user" exact component={AddUser} />
                    <PrivateRoute path="/main/hr-admin/notification" exact component={Notification} />
                    <PrivateRoute path="/main/hr-admin/notification/notification-edit" exact component={NotificationEdit} />
                    <PrivateRoute path="/main/hr-admin/notification/notification-add" exact component={NotificationAdd} />
                    <PrivateRoute path="/main/hr-admin/departments" exact component={Departments} />
                    <PrivateRoute path="/main/hr-admin/departments/departments-edit/:id" exact component={DepartmentsEdit} />
                    <PrivateRoute path="/main/hr-admin/departments/departments-add" exact component={DepartmentsAdd} />
                    <PrivateRoute path="/main/hr-admin/modes" exact component={Modes} />
                    <PrivateRoute path="/main/hr-admin/modes/add" exact component={ModesAdd} />
                    <PrivateRoute path="/main/hr-admin/modes/edit/:id" exact component={ModesEdit} />
                    <PrivateRoute path="/main/hr-admin/positions" exact component={Positions} />
                    <PrivateRoute path="/main/hr-admin/positions/add" exact component={PositionAdd} />
                    <PrivateRoute path="/main/hr-admin/positions/edit" exact component={PositionEdit} />
                    <PrivateRoute path="/main/hr-admin/branches" exact component={Branches} />
                    <PrivateRoute path="/main/hr-admin/job-title" exact component={JobTitle} />
                    <PrivateRoute path="/main/hr-admin/logging" exact component={Logging} />
                </Switch>
            </div>

        </div>
    );
};

export default MainLayoutVisitor;