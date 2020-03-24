// import React, { Component } from "react";
import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Maximilian", age: "28" },
      { name: "Maku", age: "21" },
      { name: "Steph", age: "31" }
    ],
    otherState: "Some other value",
    username: null
  });
  console.log(personsState);

  // const [otherState, setOtherState] = useState("'Some other value'");

  const switchNameHandler = newName => {
    console.log("Was clciked");
    if (personsState)
      setPersonsState({
        persons: [
          { name: newName, age: "40" },
          { name: "Marija", age: "32" },
          { name: "Stipe", age: "35" }
        ]
      });
    // if (!personsState) {
    //   setPersonsState({
    //     persons: [
    //       { name: "Maximilian", age: "28" },
    //       { name: "Maku", age: "21" },
    //       { name: "Steph", age: "31" }
    //     ]
    //   });
    // }
  };
  // nameChangedHandler = () => {};

  return (
    <div className="App">
      <h1>Hi I'm a React App</h1>
      <p>Thi is really working</p>
      <button onClick={switchNameHandler.bind(this, "Dimitar")}>
        Switch Name
      </button>
      <Person
        name={personsState.persons[0].name /*otherState*/}
        age={personsState.persons[0].age}
      />
      <Person
        /*name="Manu" age="25"*/
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={() => switchNameHandler("Pyotr")}
      >
        My Hobbies: Racing
      </Person>
      <Person
        /*name="Stephanie" age="29"*/
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
        click={switchNameHandler.bind("Pyotr")}
      />
    </div>
  );
};

export default app;

// class App extends Component {
//   state = {
//     persons: [
//       { name: "Maximilian", age: "28" },
//       { name: "Manu", age: "21" },
//       { name: "Steph", age: "31" }
//     ]
//   };

//   switchNameHandler = () => {
//     // console.log("Was clciked");
//     this.setState({
//       persons: [
//         { name: "Dimitar", age: "40" },
//         { name: "Marija", age: "32" },
//         { name: "Stipe", age: "35" }
//       ]
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Hi I'm a React App</h1>
//         <p>Thi is really working</p>
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person
//           name={this.state.persons[0].name}
//           age={this.state.persons[0].age}
//         />
//         <Person
//           /*name="Manu" age="25"*/
//           name={this.state.persons[1].name}
//           age={this.state.persons[1].age}
//         >
//           My Hobbies: Racing
//         </Person>
//         <Person
//           /*name="Stephanie" age="29"*/
//           name={this.state.persons[2].name}
//           age={this.state.persons[2].age}
//         />
//       </div>
//     );
//     //  React.createElement(
//     //   "div",
//     //   { className: "App" },
//     //   React.createElement("h1", null, "Does this work now?")
//     // );
//     // React.createElement(
//     //   "div",
//     //   null,
//     //   React.createElement("h1", null, "Does this work now?")
//     // );
//     //React.createElement("div", null, "h1", null, "Does this work now?");//
//   }
// }
