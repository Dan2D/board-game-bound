import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux'
import {getSearchResults, getCategoryResults} from "../../Store/Actions/gamesActions";
import List from "../Parts/Lists/List";
import Filter from "./Filter/Filter";


const mapDispatchToProps = dispatch => {
    return {
        getSearchResults: (searchTxt) => {
            dispatch(getSearchResults(searchTxt));
        },
        getCategoryResults: (category) => {
            dispatch(getCategoryResults(category));
        }
    }
}
// TODO(ADD PAGINATION, ADD CATEGORY BUTTONS, ADD FUNCTIONALITY FOR SORT AND FILTER)
// TODO(PASS FILTERED LIST TO LIST COMP, FIX ERRORS)
function Search(props) {

    
    const {getSearchResults, getCategoryResults} = props;
    useEffect(() => {
        if (props.match.params.searchType === "search"){
           return getSearchResults(props.match.params.text);
        }
        return getCategoryResults(props.match.params.text);
    }, [getSearchResults, getCategoryResults, props.match.params])

    if (props.loading){
        return <div>LOADING...</div>
    }

    return (
        <div>
            <Filter />
            <List title={props.match.params.text.toUpperCase()}  gameType="searchGames" list="full"/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.games.searchGames.loading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
