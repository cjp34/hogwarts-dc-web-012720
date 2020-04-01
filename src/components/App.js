import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogsBrowser from "./HogsBrowser";
import Filter from "./Filter"

class App extends Component {

  
  constructor() {
    super()
    this.state = {
      hogs: hogs,
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    this.setState( {filters: {type: `${event.target.value}`}})
  }

  OnFindHogsClick = () => {
    console.log(this.state.filters.type)
    console.log(this.state)
    this.setState({hogs: hogs})
    if (this.state.filters.type == "all") {
    } else if (this.state.filters.type == "greased") {
        this.setState({hogs: hogs})
        let pigF = this.state.hogs.filter(hog => hog.greased == true)
        this.setState({hogs: pigF})
    } else if (this.state.filters.type == "notGreased") {
      this.setState({hogs: hogs})
      let pigF = this.state.hogs.filter(hog => hog.greased == false)
        this.setState({hogs: pigF})
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <Filter filterChange={this.onChangeType} filterHog={this.OnFindHogsClick} />
        <HogsBrowser pigs={this.state.hogs}/>
      </div>
    );
  }
}

export default App;
