import React from "react";
import App from "./App";
import Hog from "./Hog";




class Hogs extends React.Component {
    render() {
        console.log(this.props.pigs)
        return (
            <div className="ui cards">
                {this.props.pigs.map( pig => <Hog hog={pig} key={pig.name} />)}

            </div>
        )
    }
}

export default Hogs;