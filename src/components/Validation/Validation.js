import React from "react";

const validation = props => {
  const styleVal = {
    color: "red"
  };
  const style = {
    color: "grey"
  };
  //   console.log(props);
  let validationMessage = "";
  if (props.inputLength === 0) {
    validationMessage = "";
  } else if (props.inputLength <= 5) {
    validationMessage = "Text is too short!";
  } else {
    validationMessage = "Text is long enough!";
  }
  return (
    <p style={props.inputLength > 5 ? styleVal : style}>{validationMessage}</p>
  );
};

export default validation;
