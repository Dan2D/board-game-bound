import React from 'react';
import {Link} from "react-router-dom";

function Title(props) {
    return (
        <div className="title-container">
            <Link className="home-lnk" to="/">
                <h2 className="title__text"><strong>BGB</strong></h2>
                <img className="title__logo" src={require("./Images/site-logo.png")} alt="site logo"/>
            </Link>
            
        </div>
    )
}

export default Title
