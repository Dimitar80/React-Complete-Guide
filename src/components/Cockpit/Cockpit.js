import React from "react";
import "./Cockpit.css";

const cockpit = props => {
  // let assignedClasses = ["red", "bold"].join(" "); //"red bold"
  let assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push("red"); // assignedClasses = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push("bold"); // assignedClasses = ['red', 'bold']
  }

  let users = null;
  if (props.persons.length === 0) {
    users = "There are no more users in a list !";
  } else {
    users = "This is really working";
  }

  return (
    <div className="Cockpit">
      <h1>Hi I'm a React App</h1>
      <p /*className={classes}*/ className={assignedClasses.join(" ")}>
        {users}{" "}
        <span style={{ color: "green", fontSize: "18px", fontWeight: "900" }}>
          {props.title}
        </span>
      </p>
      {/* inline function is convinient way for passing args(syntax) also without bind
    because is an arrow f-on, but is inefficient because React cannot rerenders in the browser
    to often!*/}
      {/* <button style={style} onClick={() => this.switchNameHandler("Dimitar", "40")}>
      Switch Name
    </button> */}
      {/* Only Refers on function and executes onClick(calls on click) without args! */}
      {/* <button style={style} onClick={this.switchNameHandler}>Switch Name</button> */}
      <button
        className={props.personsState ? "buttonRed" : "buttonGreen"}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
