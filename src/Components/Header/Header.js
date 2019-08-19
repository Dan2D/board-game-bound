import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom";
import {getCategories} from "../../Store/Actions/gamesActions";
import Title from "./Title";
import Searchbar from "./Searchbar";

const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => {
            dispatch(getCategories);
        }
    }
}

function Header(props) {
    const {getCategories} = props;
    useEffect(() => {
        getCategories();
    }, [getCategories]);
    return (
        <div className="header-container">
            <Title/>
            <Searchbar/>
            <Link className="home-lnk" to="/"><img src={require("./Images/home-icon.png")} alt="home icon"/></Link>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Header)
