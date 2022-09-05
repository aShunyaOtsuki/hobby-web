import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="profile">profile</Link>
        <Link to="game_app">game_app</Link>
        <Link to="memo">memo</Link>
      </nav>
    </div>
  );
};

export default App;
