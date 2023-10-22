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
                    <Route path="/main/building/:room_id" exact component={Rooms} />
                    <Route path="/main/building/:room_id/camera-list/:camera_id" exact component={CameraList} />
                    <Route path="/main/visitor-home" exact component={VisitorAnalytics} />
                    <Route path="/main/visitor-comparasion" exact component={VisitorComparasion} />
                    <Route path="/main/my-modules" exact component={Servers} />
                    <Route path="/main/services" exact component={Services} />
                    <Route path="/main/deployments" exact component={Deployments} />
                    <Route path="/main/deployments/:id" exact component={DeploymentsDetail} />
                    {/*<Route path="/main/detect-camera/:id" exact component={DetectCamera2} />*/}
                    {/*<Route path="/visitor-home/detect-camera" exact component={DetectCamera} />*/}

                </Switch>
            </div>

        </div>
    );
};

export default MainLayoutVisitor;