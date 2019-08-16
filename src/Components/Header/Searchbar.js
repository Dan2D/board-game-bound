import React from 'react'
import {Link} from "react-router-dom";

function Searchbar(props) {
    return (
        <div className="searchbar-container">
            <Link to={`/list/search/`}>
                <img className="searchbar__icon" src={require("./Images/search-icon.png")} alt="search icon"/>
            </Link>
            <input className="searchbar__input" type="text" placeholder="Search..."/>
            <Link className="searchbar__lnk" to={`/search/INSERT PROPS LATER`}>
                Search
            </Link>
        </div>
    )
}

export default Searchbar
