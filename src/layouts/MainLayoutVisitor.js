import React from 'react';
import {Route, Switch} from "react-router-dom";
import VisitorNavbar from "../components/VisitorNavbar";
import VisitorSideBar from "../components/VisitorSideBar";
import Camera from "../pages/Camera";
import DetectCamera2 from "../pages/Camera/DetectCamera2";

const MainLayoutVisitor = () => {
    return (
        <div className="main-layout-design">

            <div className="left-side">
                <VisitorSideBar />
            </div>
            <div className="right-side">
                <VisitorNavbar />
                <Switch>
                    <Route path="/main/visitor-home" exact component={Camera} />
                    {/*<Route path="/main/detect-camera/:id" exact component={DetectCamera2} />*/}
                    {/*<Route path="/visitor-home/detect-camera" exact component={DetectCamera} />*/}

                </Switch>
            </div>

        </div>
    );
};

export default MainLayoutVisitor;