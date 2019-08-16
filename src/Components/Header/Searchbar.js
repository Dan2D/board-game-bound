import React from 'react'
import {Link} from "react-router-dom";

function Searchbar(props) {
    return (
        <div className="searchbar-container">
            <img src={require("./Images/search-icon.png")} alt="search icon"/>
            <input className="searchbar__input" type="text" placeholder="Search..."/>
            <Link className="searchbar__lnk" to={`/search/INSERT PROPS LATER`}>
                Search
            </Link>
        </div>
    )
}

export default Searchbar
