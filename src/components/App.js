import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogsBrowser from "./HogsBrowser";

class App extends Component {

  constructor() {
    super()
    this.state = {
      hogs: [],
      filters: {
        type: 'all'
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <HogsBrowser pigs={hogs}/>
      </div>
    );
  }
}

export default App;
