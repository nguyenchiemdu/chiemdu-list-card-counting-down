import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Animal from './Animal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload abc.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: "black" }}
        >
          Learn React
        </a>
        <Animal />
      </header>
    </div>
  );
}
export const Game = () => (
  <div style={{ backgroundColor: "red", color: "blue", textAlign: "center" }}>GAME</div>
);
export const Sport = () => (
  <div style={{ backgroundColor: "red", color: "blue", textAlign: "center" }}>SPORT</div>
);
export default App;
