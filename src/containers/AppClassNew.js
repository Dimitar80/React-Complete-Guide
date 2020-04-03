import React, { Component } from "react";
import "./App.css";

import Cockpit from "../components/Cockpit/Cockpit";
import PersonsClass from "../components/Persons/PersonsClass";
// import WithClass from "./hoc/WithClass";
import withClass from "./hoc/withClass";
import Aux from "./hoc/Auxiliary";
import AuthContext from "../context/auth-context";

class AppClassNew extends Component {
  constructor(props) {
    super(props);
    console.log("[AppClassNew.js] constructor");
  }
  state = {
    persons: [
      { id: "rtb", name: "Maximilian", age: 28 },
      { id: "hfdn", name: "Manu", age: 21 },
      { id: "nfegt", name: "Steph", age: 31 }
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[AppClassNew.js] getDerivedStateFromProps", props /*state*/);
    return state;
  }

  // componentWillMount() {
  //   console.log("[AppClassNew.js] componentDiWillMount");
  // }
  componentDidMount() {
    console.log("[AppClassNew.js] componentDidMount");
  }

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

    // this.setState({
    //   persons: persons,
    //   changeCounter: this.state.changeCounter + 1
    // });

    // When you doing state updates that don't depend on oldstate is fine to pass/use only object!
    // Beacuse setState is asyncronous operation of calls
    // better way of setState when you depending on the old states optional syntax is with receiving
    // two arguments using an anonymous arrow function, where first arg is old state (prevState, props)
    // and second argument is current props if we need those!, than function body where we return
    // new state object! prevState guaranties the actual previous state!
    this.setState((prevState, props) => {
      return { persons: persons, changeCounter: prevState.changeCounter + 1 };
    });
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

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log("[AppClassNew.js] render");
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
        <PersonsClass
          persons={this.state.persons}
          clickdel={this.deletePersonHandler}
          changedInputName={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
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
      // <div className="App">
      // <WithClass classes="App">
      <Aux>
        <button
          style={{ margin: "20px auto 20px" }}
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {/* Only parts of this parrent component who would need access(are concerned) to the context
         should be wrapped with this context component!!! */}

        {/* Outer curly braces for dynamic content, inner curly braces for JS constructor object! */}

        {/* Props and state change cause rerender cycle, so only changing something in the context object
        would not cause a rerender cycle   */}
        <AuthContext.Provider
          // In value - context object is placed!
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              // persons={this.state.persons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
              personsState={this.state.showPersons}
              login={this.loginHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
      /* </WithClass> */
      /* </div> */
    );
  }
}

export default withClass(AppClassNew, "App");
// export default AppClassNew;
