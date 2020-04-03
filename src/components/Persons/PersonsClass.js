import React, { PureComponent } from "react";

import PersonClass from "./Person/PersonClass";
// import AuthContext from "../../context/auth-context";
//Here we gonna consume the context

// class PersonsClass extends React.Component
// PureComponent is replacement for manually implementing of shouldComponentUpdate!
class PersonsClass extends PureComponent {
  //   static getDerivedStateFromProps(props, state) {
  //     console.log("[PersonsClass.js] getDerivedStateFromProps");
  //     return state;
  //   }

  //   componentWillReceiveProps(props) {
  //     console.log("[PersonClass.js] componentWillReceiveProps", props);
  //   }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log("[PersonsClass.js] shouldComponentUpdate");
  //     //   Need comparisson for true/false
  //     // return this.props
  //     // this right below (comparison) is for performance optimization!
  //     if (
  //       nextProps.persons !== this.props.persons ||
  //       nextProps.clickDel !== this.props.clickdel ||
  //       nextProps.changedName !== this.props.changedInputName
  //     ) {
  //       // comparison of pointers (because arrays and object are stored in memory), props and vars
  //       // are only pointers
  //       console.log("true");
  //       return true;
  //     } else {
  //       console.log("false");
  //       return false;
  //     }
  //     // return true;
  //   }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[PersonsClass.js] getSnapshotBeforeUpdate");
    // return null;
    return { message: "Snapshot!" };
  }

  //   componentWillUpdate(){

  //   }

  componentDidUpdate(prevProps, prevState, snapashot) {
    console.log("[PersonsClass.js] componentDidUpdate");
    console.log(snapashot);
  }

  componentWillUnmount() {
    console.log("[PersonsClass.js] componentWillUnmount");
  }

  render() {
    console.log("[Persons.js] rendering...");
    // console.log(this.props.persons);
    return this.props.persons.map((person, index) => {
      // console.log(index + " - " + person.name);
      return (
        <PersonClass
          // attributes for pass-ing as Components props
          key={person.id}
          name={person.name}
          age={person.age}
          // clickdel={() => props.deletePersonHandler(index)}
          clickDel={() => this.props.clickdel(index)}
          // changed={this.nameChangedHandler}
          // changed={event => props.nameChangedHandler(event, person.id)}
          changedName={event => this.props.changedInputName(event, person.id)}
          //   isAuth={this.props.isAuthenticated}
          // With Context component we are skipping this forwarder(pass-ed) this.props
          // which causes extra cycle!
        >
          This is{" "}
          <span style={{ fontWeight: 900, fontSize: "20px" }}> "Child" </span>{" "}
          of a/in Components
        </PersonClass>
      );
    });
  }
}

//   render() {
//     console.log("[Persons.js] rendering...");
//     // console.log(this.props.persons);
//     return (
//       <AuthContext.Consumer>
//         {(context /*context object*/) =>
//           this.props.persons.map((person, index) => {
//             // console.log(index + " - " + person.name);
//             return (
//               <PersonClass
//                 // attributes for pass-ing as Components props
//                 key={person.id}
//                 name={person.name}
//                 age={person.age}
//                 // clickdel={() => props.deletePersonHandler(index)}
//                 clickDel={() => this.props.clickdel(index)}
//                 // changed={this.nameChangedHandler}
//                 // changed={event => props.nameChangedHandler(event, person.id)}
//                 changedName={event =>
//                   this.props.changedInputName(event, person.id)
//                 }
//                 // isAuth={this.props.isAuthenticated}
//                 // With Context component we are skipping this forwarder(pass-ed) this.props
//                 // which causes extra cycle!
//               >
//                 This is{" "}
//                 <span style={{ fontWeight: 900, fontSize: "20px" }}>
//                   {" "}
//                   "Child"{" "}
//                 </span>{" "}
//                 of a/in Components
//               </PersonClass>
//             );
//           })
//         }
//       </AuthContext.Consumer>
//     );
//   }
// }

export default PersonsClass;
