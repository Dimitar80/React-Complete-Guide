import React, { Component } from "react";
import "./App.css";

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class AppClassNew extends Component {
  state = {
    persons: [
      { id: "rtb", name: "Maximilian", age: "28" },
      { id: "hfdn", name: "Manu", age: "21" },
      { id: "nfegt", name: "Steph", age: "31" }
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
      // person's-id === arg id
      console.log(p);
      console.log(p.id);
      console.log(id);
      console.log(p.id === id);
      return p.id === id;
    });

    // more modern approach than Object.assign()
    const person = { ...this.state.persons[personIndex] }; //index fetched above
    // console.log(person);
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    // console.log(person);
    this.setState({ persons: persons });
    console.log(this.state.persons);
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
    // const persons = this.state.persons.slice();
    //slice method without args creates COPY of that full array
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
    console.log(this.state.persons);
  };

  togglePersonsHandler = () => {
    // const doesShow = this.state.showPersons;
    // this.setState({ showPersons: !doesShow });
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    // const style = {
    //   font: "inherit",
    //   border: "1px solid blue",
    //   borderRadius: "5px",
    //   backgroundColor: "green",
    //   color: "white",
    //   padding: "8px",
    //   cursor: "pointer",
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //     color: "black"
    //   }
    // };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clickdel={this.deletePersonHandler}
          changedInputName={this.nameChangedHandler}
          // clickdel={() => this.deletePersonHandler(index)}
          // changed={event => this.nameChangedHandler(event, person.id)}
        />
      );

      // style.backgroundColor = "red";
      // //":hover" in brackets because is string
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "blue"
      // };
    }

    return (
      <div className="App">
        <Cockpit
          title={this.props.appTitle}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          personsState={this.state.showPersons}
        />
        {persons}
      </div>
    );
  }
}
export default AppClassNew;
