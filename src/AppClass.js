import React, { Component } from "react";
import "./App.css";
// import Radium, { StyleRoot } from "radium";
// import styled from "styled-components";
import Person from "./Person/Person";

// const StyledButton = styled.button`
//         font: inherit,
//       border: 1px solid blue;
//       border-radius: 5px;
//       background-color: ${props => (props.alt ? "red" : "green")};
//       color: white;
//       padding: 8px;
//       cursor: pointer;
//            &:hover {
//         background-color: ${props => (props.alt ? "red" : "lightgreen")};
//         color: black
//       }`;

class AppClass extends Component {
  state = {
    persons: [
      { id: "rtb1", name: "Maximilian", age: "28" },
      { id: "hfdn2", name: "Manu", age: "21" },
      { id: "nfegt3", name: "Steph", age: "31" }
    ],
    otherState: "some other value",
    showPersons: false
  };

  // switchNameHandler = (newName, newAge) => {
  //   // console.log("Was clciked");
  //   this.setState({
  //     persons: [
  //       { name: newName, age: newAge },
  //       { name: "Marija", age: "32" },
  //       { name: "Stipe", age: "35" }
  //     ]
  //   });
  // };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      // person's-id === agr id
      return p.id === id;
    });
    // more modern approach than Object.assign()
    const person = { ...this.state.persons[personIndex] }; //index fetched above
    // const person = Object.assign({}, this.state.persons[personIndex]);
    // console.log(event);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
    // this.setState({
    //   persons: [
    //     { name: "Dimitar", age: "40" },
    //     { name: event.target.value, age: "32" },
    //     { name: "Stipe", age: "29" }
    //   ]
    // });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons;
    // const persons = this.state.persons.slice(); //slice method without args creates COPY of that full array
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
    console.log(this.state.persons);
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      font: "inherit",
      border: "1px solid blue",
      borderRadius: "5px",
      // boxShadow: "0 2px 3px blue",
      backgroundColor: "green",
      color: "white",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            // console.log(index + " - " + person.name);
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                clickdel={() => this.deletePersonHandler(index)}
                // changed={this.nameChangedHandler}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      //":hover" in brackets because is string
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "blue"
      };
    }

    // let classes = ["red", "bold"].join(" "); //"red bold"
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ['red', 'bold']
    }
    return (
      // <StyleRoot>
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p /*className={classes}*/ className={classes.join(" ")}>
          Thi is really working
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
          className="button"
          // style={style}
          // onClick={this.switchNameHandler.bind(this, "Dimitar", "40")}
          onClick={this.togglePersonsHandler}
        >
          {/* <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        > */}
          Toggle Persons
          {/* </StyledButton> */}
        </button>
        {persons}
      </div>
      //{" "}
      // </StyleRoot>
    );
  }
}
export default AppClass;
// export default Radium(AppClass);

// import React, { Component } from "react";

// import "./App.css";
// import Person from "./Person/Person";

// class AppClass extends Component {
//   state = {
//     persons: [
//       { name: "Maximilian", age: "28" },
//       { name: "Manu", age: "21" },
//       { name: "Steph", age: "31" }
//     ],
//     otherState: "some other value",
//     showPersons: false
//   };

//   switchNameHandler = (newName, newAge) => {

//     this.setState({
//       persons: [
//         { name: newName, age: newAge },
//         { name: "Marija", age: "32" },
//         { name: "Stipe", age: "35" }
//       ]
//     });
//   };

//   nameChangedHandler = event => {

//     this.setState({
//       persons: [
//         { name: "Dimitar", age: "40" },
//         { name: event.target.value, age: "32" },
//         { name: "Stipe", age: "29" }
//       ]
//     });
//   };

//   togglePersonsHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState({ showPersons: !doesShow });
//   };

//   render() {
//     const style = {
//       font: "inherit",
//       border: "2px solid blue",
//       borderRadius: "5px",

//       backgroundColor: "rgb(62, 185, 216)",
//       padding: "8px",
//       cursor: "pointer"
//     };

//     let persons = null;
//     if (this.state.showPersons) {
//       persons = (
//         <div>

//           <Person
//             name={this.state.persons[0].name}
//             age={this.state.persons[0].age}

//             click={this.switchNameHandler.bind(this, "Pyotr", "20")}

//           />
//           <Person

//             name={this.state.persons[1].name}
//             age={this.state.persons[1].age}
//             changed={this.nameChangedHandler}
//           >
//             <span style={{ color: "blue" }}>
//               This is a child of a component
//             </span>{" "}
//             - My Hobbies: Racing
//           </Person>
//           <Person

//             name={this.state.persons[2].name}
//             age={this.state.persons[2].age}
//           />
//         </div>
//       );
//     }

//     return (
//       <div className="App">
//         <h1>Hi I'm a React App</h1>
//         <p>Thi is really working</p>

//         {/* inline function is convinient way for passing args(syntax) also without bind
//         because is an arrow f-on, but is inefficient because React cannot rerenders in the browser
//         to often!*/}
//         {/* <button style={style} onClick={() => this.switchNameHandler("Dimitar", "40")}>
//           Switch Name
//         </button> */}

//         {/* Only Refers on function and executes onClick(calls on click) without args! */}
//         {/* <button style={style} onClick={this.switchNameHandler}>Switch Name</button> */}

//         <button
//           style={style}
//           /*onClick={this.switchNameHandler.bind(this, "Dimitar", "40")}*/
//           onClick={this.togglePersonsHandler}
//         >
//           {/* Switch Name */} Toggle Persons
//         </button>
//         {/* witj "true" - double check in  this case! */}
//         {/* {this.state.showPersons === true ? (
//           <div>
//             <Person
//               name={this.state.persons[0].name}
//               age={this.state.persons[0].age}
//               click={this.switchNameHandler.bind(this, "Pyotr", "20")}
//             />
//             <Person
//               name={this.state.persons[1].name}
//               age={this.state.persons[1].age}
//               changed={this.nameChangedHandler}
//             >
//               <span style={{ color: "blue" }}>
//                 This is a child of a component
//               </span>{" "}
//               - My Hobbies: Racing
//             </Person>
//             <Person
//               name={this.state.persons[2].name}
//               age={this.state.persons[2].age}
//             />
//           </div>
//         ) : null} */}
//         {persons}
//       </div>
//     );
//   }
// }

// export default AppClass;
