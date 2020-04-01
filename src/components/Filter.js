import React from 'react'
import App from './App'

class Filters extends React.Component {
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange = {this.props.filterChange}>
            <option value="all">All</option>
            <option value="greased">Greased</option>
            <option value="notGreased">Not greased</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick = {this.props.filterHog}>Find hogs</button>
        </div>
      </div>
    )
  }
}

export default Filters