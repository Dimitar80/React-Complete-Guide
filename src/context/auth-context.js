import React from "react";
// import { array, number } from "prop-types";

// THE USE OF CONTEXT API IS PRACTICAL FOR BY PASSING DATA ex. FROM A to D (EXCLUDE B, C)!
// WHEN WE HAVE LONG CHAINS OF DATA PASSING AROUND ...
// (Passing data from component to component to component...)

// createContext allow us to initialize context with the default value
// because context is globally awailable JS object, globally awailable it is not correect, i decide
// where it is awailable.
// technically it does not have to be an object
// it could be an array, string, number etc as a context value!
const AuthContext = React.createContext({
  // authenticated and login are keys here
  authenticated: false,
  login: () => {}
});

export default AuthContext;
