import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import AppClass from "./AppClass";
// import AppUser from "./AppUser";
// import AppLandC from "./AppLandC";

ReactDOM.render(<AppClass />, document.getElementById("root"));
registerServiceWorker();
