import React from "react";
import App from "./App";


class Hog extends React.Component {

    render() {
        let {name, specialty, greased, weight} = this.props.hog
        console.log(this.props.hog.name)
        return (
            <h1> </h1>
        )
    }
}

export default Hog