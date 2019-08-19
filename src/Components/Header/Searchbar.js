import React, {useState} from 'react'
import {Link} from "react-router-dom";

function Searchbar(props) {
    const [searchVal, setSearchVal] = useState("");
    return (
        <div className="searchbar-container">
            <Link to={`/list/search/`}>
                <img className="searchbar__icon" src={require("./Images/search-icon.png")} alt="search icon"/>
            </Link>
            <input className="searchbar__input" type="text" placeholder="Search..." value={searchVal} onChange={(e) => setSearchVal(e.target.value)}/>
            <Link className="searchbar__lnk" to={`/list/search/${searchVal}`}>
                Search
            </Link>
        </div>
    )
}

export default Searchbar
