import React from "react";

// convention for HOC file names to start with "With"

//Functional component
// const withClass = props => (
//   <div className={props.classes}>{props.children}</div>
// );

// Function that returns functional component
const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;
