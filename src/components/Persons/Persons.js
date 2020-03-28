import React from "react";
import Person from "./Person/Person";

const persons = props =>
  props.persons.map((person, index) => {
    // console.log(index + " - " + person.name);
    return (
      <Person
        // attributes for pass-ing as Components props
        key={person.id}
        name={person.name}
        age={person.age}
        // clickdel={() => props.deletePersonHandler(index)}
        clickDel={() => props.clickdel(index)}
        // changed={this.nameChangedHandler}
        // changed={event => props.nameChangedHandler(event, person.id)}
        changedName={event => props.changedInputName(event, person.id)}
      >
        This is{" "}
        <span style={{ fontWeight: 900, fontSize: "20px" }}> "Child" </span> of
        a/in Components
      </Person>
    );
  });

export default persons;
