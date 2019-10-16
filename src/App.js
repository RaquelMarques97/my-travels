import React, { Component } from "react";
import "./App.css";

import Travel from "./Travel";
import Travels from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Travels</h1>
        </header>
        <Travel
          country="Portugal"
          distance="10km"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/2000px-Flag_of_Portugal.svg.png"
          destination="Viseu"
        />
        <Travel
          country="France"
          distance="20km"
          photo="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
          destination="Paris"
        />
        <div className="App-travels">
          <Travels />
        </div>
      </div>
    );
  }
}

export default App;