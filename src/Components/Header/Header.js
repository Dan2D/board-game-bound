import React from 'react'
import {Link} from "react-router-dom";

import Title from "./Title";
import Searchbar from "./Searchbar";

function Header(props) {
    return (
        <div className="header-container">
            <Title/>
            <Searchbar/>
            <Link to="/"><img src={require("./Images/home-icon.png")} alt="home icon"/></Link>
        </div>
    )
}

export default Header
