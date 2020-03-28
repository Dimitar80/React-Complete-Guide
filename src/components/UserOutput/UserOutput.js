import React from "react";
import "../App.css";
import "./UserOutput.css";

const userOutput = props => {
  return (
    <div /*className="uO"*/ className="UserOutput">
      <p>
        Username:{" "}
        <span style={{ color: "red", fontWeight: 700 }}>{props.userName}</span>
      </p>
      <p>I hope i'll be overwritten</p>
    </div>
  );
};

export default userOutput;
