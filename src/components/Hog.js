import React from "react";
import App from "./App";


class Hog extends React.Component {

    render() {
        let {name, specialty, greased, weight} = this.props.hog
        console.log(this.props.hog.name)
        let pic_name = name.split(' ').join('_').toLowerCase()
        let picture = require(`../hog-imgs/${pic_name}.jpg`)
        return (
            <div className="pigTile">
                <img src={picture}></img>
                <h1> {name} </h1>
                <p>{specialty}</p>
                <p>{greased}</p>
                <p>{weight}</p>

            </div>
            
        )
    }
}

export default Hog