import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import AppClassNew from "./containers/AppClassNew";
// import AppClass from "./containers/AppClass";
// import AppUser from "./AppUser";
// import AppLandC from "./AppLandC";

ReactDOM.render(
  <AppClassNew appTitle={"Person Manager"} />,
  document.getElementById("root")
);
registerServiceWorker();
