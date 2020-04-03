import React, { useEffect, useRef } from "react";
import "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const Cockpit = props => {
  //   useRef(/*we could pass an initial value here, not to just use references to access to DOM*,
  //   /*also we can store other values here but this is more advanced*/);

  //This is reference with the help of useRef - hook
  const toggleBtnRef = useRef(null /*is an initial value here*/);

  // useEffect()
  //    useEffect as a default takes a function that will run for every render cycle.
  //   Runs all the Time, combines ComponentDidMount, componentDidUpdate and componentWillUnmount.

  //useEffect function runs right after every render cycle!!!
  //Runns and executes inside right code after JSX code is parsed and rendered for the first time!
  useEffect(
    () => {
      console.log("[Cockpit.js] useEffect");
      // Http request ...
      // Just to show how it works! - tricky side of useEffect

      //   const timer =
      //   setTimeout(() => {
      //     alert("Saved to cloud");
      //   }, 1000); //componentDidMount and rendered for the first time!

      toggleBtnRef.current.click();

      return () => {
        // clearTimeout(timer);
        console.log("[Cockpit.js] Clean up work in useEffect");
      }; // when is unmounted!
    },
    [] /*[props.persons,a,b,c,...] - with the dependencies on a certain field*/
  ); //this second argument controls when does it executes
  //Empty array[] - for example for componentDidMount and rendered for the first time!

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] Clean up work in 2nd useEffect");
    };
  });

  // let assignedClasses = ["red", "bold"].join(" "); //"red bold"
  let assignedClasses = [];
  if (/*props.persons.length*/ props.personsLength <= 2) {
    assignedClasses.push("red"); // assignedClasses = ['red']
  }
  if (/*props.persons.length*/ props.personsLength <= 1) {
    assignedClasses.push("bold"); // assignedClasses = ['red', 'bold']
  }

  let users = null;
  if (/*props.persons.length*/ props.personsLength === 0) {
    users = "There are no more users in a list !";
  } else {
    users = "This is really working";
  }
  console.log(props);

  // VirtualDOM/JSX code-downthere
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
        ref={toggleBtnRef}
        className={props.personsState ? "buttonRed" : "buttonGreen"}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
      <AuthContext.Consumer>
        {context => (
          <button
            /*onClick={props.login}*/ onClick={context.login}
            className="buttonGreen"
          >
            Log in
          </button>
        )}
      </AuthContext.Consumer>
    </div>
  );
};

// Functional component equivalent for Class based shouldComponentUpdate!
// Tecxhnique for memoization - store a snapShot of this Functional component
// and only if it's input changes it will rerender it!
// If this component's input do not change and if some Parent component wants to update this Cockpit comp
// React will give that back stored component!
// Optimization for functional components
// Also React.memo() - accepts second argument - a comparison function
// The comparison function returns boolean
export default React.memo(Cockpit);
