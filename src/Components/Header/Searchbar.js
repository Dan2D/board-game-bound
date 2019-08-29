import React, {useState} from 'react'
import {Link} from "react-router-dom";

function Searchbar(props) {
    const [searchVal, setSearchVal] = useState("");

    function keyCheck(e) {
        if (e.keyCode === 13) {
            handleSearchSubmit(e)
        }
    }

    function handleSearchSubmit(e) {
        e.preventDefault();
        document.getElementById("search-lnk").click();
    }
  

    return (
        <div className="searchbar-container">
            <img className="searchbar__icon" src={require("./Images/search-icon.png")} alt="magnifying glass search icon"/>
            <input 
            className="searchbar__input" 
            type="text" placeholder="Search..." 
            value={searchVal} 
            onKeyDown={e => keyCheck(e)} 
            onChange={e => setSearchVal(e.target.value)}
            />
            <Link  
            id="search-lnk"
            className="searchbar__lnk" 
            to={{pathname: `/list/search/${searchVal}`, state: {title: searchVal}}} 
            onClick={(e) => {if (searchVal === ""){return e.preventDefault()}}}>
                Search
            </Link>
        </div>
    )
}

export default Searchbar
