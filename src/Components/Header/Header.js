import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom";
import {getCategories} from "../../Store/Actions/gamesActions";
import Filter from "../Search/Filter/Filter";
import Sort from "../Search/Sort/Sort";
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
            <div className="header-top">
                <Title/>
                <Searchbar/>
            </div>
            {props.content === "search" &&
            <div className="header-bottom" style={{}}>
                    <Filter /> 
            </div>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        content: state.games.content
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
