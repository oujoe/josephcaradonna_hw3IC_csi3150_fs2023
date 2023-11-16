import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

// code for counter modified from https://www.geeksforgeeks.org/how-to-create-a-simple-counter-using-reactjs/#

function App() {
  // set Counter variables to 0
  const [counter, incrementCounter] = useState(0);

  // increment counter up by 1
  const upButton = () => {
    incrementCounter(counter + 1);
  };

  // increment counter down by 1
  const downButton = () => {
    incrementCounter(counter - 1);
  };

  return (
    <div className="App">
      <div className="counterValue">{counter}</div>
      <div className="buttons">
        <button className="button1" onClick={downButton}>
          -
        </button>
        <button className="button2" onClick={upButton}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
