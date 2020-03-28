import React, { Component } from "react";
import "./App.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

// Lists and Conditional Rendering
// Conditional Rendering and Outputing Lists
class AppLandC extends Component {
  state = {
    userInput: ""
  };
  inputChangedHandler = event => {
    this.setState({ userInput: event.target.value });
    // console.log(this.state.userInput);
  };

  deleteCharHandler = index => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    // console.log(text.splice(index));
    const updatedText = text.join("");
    this.setState({ userInput: updatedText });
  };
  render() {
    // console.log(this.state.userInput.length);
    const charList = this.state.userInput.split("").map((char, index) => {
      return (
        <Char
          character={char}
          key={index}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });
    return (
      <div className="AppLandC">
        <div id="TasksLandC">
          <ol>
            <li>
              Create an input field(in App component) with a change listener
              which outputs the length of the entered text below (e.g. in
              paragraph). +
            </li>
            <li>
              Create a new component (=> ValidationComponent) which receives the
              text length as a prop. +
            </li>
            <li>
              Inside a ValidationComponent, either output "Text is too short" or
              "Text long enouh" depending on the text length(e.g. take 5 as a
              minimum length). +
            </li>
            <li>
              Create another component (=> CharComponent) and style it as an
              inline box (display: inline-block; padding:16px; text-align:
              center; margin: 16px; border: 1px solid black).
            </li>
            <li>
              Render a list of CharComponents where each CharComponent receives
              a different letter of the entered text (in the initial input
              field) as a prop. +
            </li>
            <li>
              When you click a CharComponent, it should be removed from the
              entered text.
            </li>
          </ol>
          <h3 style={{ marginLeft: "20px", padding: "0px" }}>
            Hint: Keep in mind that JavaScript strings are basically arrays!
          </h3>
        </div>
        <hr />
        <div>
          <p style={{ color: "grey", margin: "25px auto 8px" }}>
            Please insert data
          </p>
          <input
            type="text"
            // style={{ display: "inline-block", textAlign: "center" }}
            onChange={this.inputChangedHandler}
            value={this.state.userInput}
          />
          <p style={{ marginBottom: "5px", color: "grey" }}>
            Your entered data:
          </p>
          <p style={{ marginTop: "0px" }}>{this.state.userInput}</p>
        </div>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default AppLandC;
