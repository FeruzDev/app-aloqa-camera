import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Login from "./pages/Login";
import MainLayoutVisitor from "./layouts/MainLayoutVisitor";
import DetectCamera from "./pages/Camera/DetectCamera";
import CameraREctangle from "./pages/Camera/CameraREctangle";
import DetectCamera2 from "./pages/Camera/DetectCamera2";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Landing from "./pages/Landing";
import MainLayout from "./layouts/MainLayout";
function App() {
  return (
      <>

          <Switch>
              <Redirect  exact from="/" to="/home" />

              <Route path="/home" component={Landing} />
              <Route path="/main" component={MainLayoutVisitor} />
              <Route path="/detect-camera/:id" exact component={DetectCamera2} />
              <Route path="/login" exact component={Login} />

              {/*<Route path="/hr-admin" component={MainLayout} />*/}

          </Switch>
          <ToastContainer />
      </>
  );
}

export default App;
