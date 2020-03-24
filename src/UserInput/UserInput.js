import React from "react";
import "../App.css";
import "./UserInput.css";

const userInput = props => {
  const inputStyle = {
    border: "2px solid red",
    padding: "5px",
    display: "inlineblock"
  };
  const wrapper = {
    width: "60%",
    textAlign: "center",
    margin: "16px",
    padding: "16px"
    // backgroundColor: "red"
  };

  return (
    <div style={wrapper} /*className="container"*/>
      <input
        id="name"
        type="text"
        style={inputStyle}
        onChange={props.changed}
        value={props.currentName}
      />
    </div>
  );
};

export default userInput;
