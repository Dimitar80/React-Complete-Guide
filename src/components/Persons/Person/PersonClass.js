import React, { Component } from "react";
import PropTypes from "prop-types";

import Aux from "../../../containers/hoc/Auxiliary";
import withClass from "../../../containers/hoc/withClass";

import "./Person.css";
import AuthContext from "../../../context/auth-context";

class PersonClass extends Component {
  constructor(props) {
    super(props);
    //   inputElement is global property
    // This is not necessarily my input - this is any reference object React gives me!
    // This property is now initialized here in the constructor,
    // this holds access to this createRef object!!!
    this.inputElementRef = React.createRef(); //createRef() is a method on React object we are importing!
    //And im storing it in inputElement
  }
  componentDidMount() {
    //   document.querySelector is general web or browser feature, general DOM selector
    // It's not related to React.js
    // document.querySelector("input").focus();
    // "this" - keyword beacuse is property of this class!
    //this.inputElement.focus(); // inputElement is a global property,
    //React suitable way of selecting element - 'ref', better than 'id' or 'document.querySel...'
    this.inputElementRef.current.focus();
    //current element is input in this case!
  }
  render() {
    //   console.log(props);
    // const style = {
    //   "@media (minidth: 500px)": {
    //     width: "450px"
    //   }
    // };

    console.log("[Person.js] rendering...");
    // console.log(this.props.children);
    return (
      // Aux is basically an empty wrapper using "special -children- property"
      // which "React reserves" for us - reserved property name! - children will always refer to
      // the content between wrapping (opening and closing)tags of your component.
      // IN this case Aux outputs that content(children)
      //   <Aux>- Top level element(wrapper) to return ONE expression (JS-point of view!)
      //   All inside elements are always calls return(React.createElement() React.createElement())
      //   multiple React.createElement - setTimeout, but it is not proper JSX code!!!

      <Aux>
        {/* <React.Fragment> */}
        {/* Using One parrent div as a wrapper which is purposed for structured or styling reasons!
          Instead we are using an array! and we should assign a key in each element respectively!
          But using an array is inconvinient!!!
           We can create a wrapping component that does not renders HTML code, but is simply there
           to fulfill React.js requiremens of having a wrapping component - HOC
           HOC - thay are basically components that wraps other components!
  
           <Aux> is Custom Build HOC component - technical wrapper
           While <React.Fragment> is BuildIn React HOC(wrapper)component
           <div className="Person" style={style}> */}
        <AuthContext.Consumer>
          {context =>
            context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>
          }
        </AuthContext.Consumer>
        {/* {this.props.isAuth ? <p>Authenticated!</p> : <p>Please log in</p>} */}
        <p>
          [
          <span
            style={{
              color: "red",
              textAlign: "start",
              cursor: "pointer",
              fontWeight: "bold"
            }}
            onClick={this.props.clickDel}
          >
            X
          </span>
          ] FC + Dynamic Content JSX - I'm a Person, named{" "}
          <span style={{ color: "red" }}>{this.props.name}</span> and im{" "}
          {/*{Math.floor(Math.random() * 30)}*/}{" "}
          <span style={{ color: "red" }}>{this.props.age} </span>old.
        </p>
        <p key="i2" style={{ color: "purple" }}>
          {this.props.children}
        </p>
        <input
          key="i3"
          //This function based approach is not usable in functional components
          //   ref={inputEl => {
          //     this.inputElement = inputEl;
          //   }} // this approach only works in class based components, not in functional
          ref={this.inputElementRef} // Here is assigning to this ref property! and
          //   inputElementRef will allow me an access on this "input" element that is assigned
          type="text"
          onChange={this.props.changedName}
          value={this.props.name}
        />
        {/* </React.Fragment> */}
      </Aux>
    );
  }
}

// Functions are function objects. In JavaScript, anything that is not a primitive type
// ( undefined , null , boolean , number , or string )
// is an object. ... Because of this, we can even pass a function as a parameter into another function.

// Data Types in JavaScript
// Data types basically specify what kind of data can be stored and manipulated within a program.
// ... String, Number, and Boolean are primitive data types. Object, Array, and Function
// (which are all types of objects)
// are composite data types. Whereas Undefined and Null are special data types.

// propTypes is special property which you add to any JS (component)object, that React will
// watchout in development mode and give you a warning if passing an incorrect prop!
// This is required and good for team work when sharing components to be aware of datatypes!

// In this object we will define which props this component uses and which type of data each
// component should be of!
// Also we can use-setup more advanced PropTypes - example - this should be a function that gets
// this and that arguments and returns something like this...(more specific).

// Use of PropTypes is especially important to use if we build a component library and we should
//share with another developers!

PersonClass.propTypes = {
  // keys will be the prop names, values will be the PropTypes-data types!
  //   For key clickDel func indicates that i expect do get pointer at a function!,
  //   (not a string, not a number...).
  clickDel: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  children: PropTypes.array,
  changedName: PropTypes.func
};

export default withClass(PersonClass, "Person");

//     return [
//         Using One parrent div which is purposed for structured or styling reasons!
//          Instead we are using an array! and we should assign a key in each element respectively!
//          But using an array is inconvinient!!!
//           We can create a wrapping component that does not renders HTML code, but is simply there
//           to fulfill React.js requiremens of having a wrapping component - HOC
//           HOC - thay are basically components that wraps other components!

//           {/* <div className="Person" style={style}> */}
//        <p key="i1">
//          [
//          <span
//            style={{
//              color: "red",
//              textAlign: "start",
//              cursor: "pointer",
//              fontWeight: "bold"
//            }}
//            onClick={this.props.clickDel}
//          >
//            X
//          </span>
//          ] FC + Dynamic Content JSX - I'm a Person, named{" "}
//          <span style={{ color: "red" }}>{this.props.name}</span> and im{" "}
//          {/*{Math.floor(Math.random() * 30)}*/}{" "}
//          <span style={{ color: "red" }}>{this.props.age} </span>old.
//        </p>,
//        <p key="i2" style={{ color: "purple" }}>
//          {this.props.children}
//        </p>,
//        <input
//          type="text"
//          onChange={this.props.changedName}
//          value={this.props.name}
//          key="i3"
//        />
//      ];
//    }
//  }
//  export default PersonClass;
//  export default Radium(person);
