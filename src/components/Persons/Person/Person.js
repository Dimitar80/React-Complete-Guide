import React from "react";
// import Radium from "radium";
import "./Person.css";
// import styled from "styled-components";
// every method(div, h2, input ...)
// provided by styled object returns React Component therefore we dont need arrow styled f-n

// const StyledDiv = styled.div`
// width: 60%;
// margin: 10px auto 10px;
// border: 1px solid #eee;
// box-shadow: 0 2px 3px #ccc;
// padding: 16px;
// text-align: center;
// }

// @media (min-width: 500px) {
//   width: 450px;
// }
// `;

const person = (props, pop) => {
  //   console.log(props);
  const style = {
    "@media (minidth: 500px)": {
      width: "450px"
    }
  };

  // const rnd = Math.random();
  // if (rnd > 0.7) {
  //   throw new Error("Somethingwent wrong!");
  // }
  // console.log(rnd);
  console.log("[Person.js] rendering...");
  return (
    <div className="Person" style={style}>
      {/* <StyledDiv> */}
      <p>
        [
        <span
          style={{
            color: "red",
            textAlign: "start",
            cursor: "pointer",
            fontWeight: "bold"
          }}
          onClick={props.clickDel}
        >
          X
        </span>
        ] FC + Dynamic Content JSX - I'm a Person, named{" "}
        <span style={{ color: "red" }}>{props.name}</span> and im{" "}
        {/*{Math.floor(Math.random() * 30)}*/}{" "}
        <span style={{ color: "red" }}>{props.age} </span>old.
      </p>
      <p style={{ color: "purple" }}>{props.children}</p>
      <input type="text" onChange={props.changedName} value={props.name} />
    </div>
    /* </StyledDiv> */
  );
};

export default person;
// export default Radium(person);
