import React from "react";
import './App.css';
import CardContainer from "./Components/Card/CardContainer";
import Counter from "./Components/Counter/Counter";
import Video from "./Components/Video/Video"

function App() {
    return (
    <div className="app">
      <Counter />
      <CardContainer />
      <Video />
    </div>
  );
}

export default App;
