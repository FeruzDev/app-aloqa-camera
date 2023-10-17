import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./pages/Login";
import MainLayoutVisitor from "./layouts/MainLayoutVisitor";
import DetectCamera from "./pages/Camera/DetectCamera";
import CameraREctangle from "./pages/Camera/CameraREctangle";
import DetectCamera2 from "./pages/Camera/DetectCamera2";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
      <>

          <Switch>
              {/*<Route path="/" component={MainLayoutVisitor} />*/}
              {/*<Route path="/" component={MainLayoutVisitor} />*/}
              <Route path="/main" component={MainLayoutVisitor} />
              {/*<Route path="/camera" component={DetectCamera} />*/}
              <Route path="/detect-camera/:id" exact component={DetectCamera2} />

              {/*<Route path="/camera2" component={DetectCamera2} />*/}
              {/*<Route path="/camerarec" component={CameraREctangle} />*/}
              <Route path="/login" exact component={Login} />
          </Switch>
          <ToastContainer />
      </>
  );
}

export default App;
