import React from "react";
import {Link} from "react-router-dom"

class BackButton extends React.Component{
    render(){
        return(
            <div>
            <Link to="/">
            <button className="close-search"></button>
            </Link>
            </div>
    
        )
    }
}

export default BackButton