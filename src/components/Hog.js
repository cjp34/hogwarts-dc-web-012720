import React from "react";
import App from "./App";


class Hog extends React.Component {

    constructor() {
        super()
        this.state = {
            showDetails: false
        }
    }
    
    showHogDetails() {

        let currentState = this.state.showDetails;
        this.setState({showDetails: !currentState })
        console.log(`${this.state.showDetails}`)
    }

    render() {
        let {name, specialty, greased, weight} = this.props.hog
        // console.log(this.props.hog.name)
        let pic_name = name.split(' ').join('_').toLowerCase()
        let picture = require(`../hog-imgs/${pic_name}.jpg`)
        return (
            <div className="pigTile" >
                {this.state.showDetails ? (
                <div>
                    <img src={picture}></img>
                    <h1> {name} </h1>
                    <p> Specialty: {specialty} </p> 
                    <p> {greased} </p> 
                    <p> Weight: {weight} </p> 
                    <button onClick={() => this.showHogDetails()}>Hide Hog Details</button>
                </div>) : (
                <div>
                    <img src={picture}></img>
                    <h1> {name} </h1>
                    <button onClick={() => this.showHogDetails()}>Show Hog Details</button>
                </div>)}
            </div>
                
        )
    }
}

export default Hog