import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import {getSearchResults, getCategoryResults} from "../../Store/Actions/gamesActions";
import List from "../Parts/Lists/List";



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
            <List title={props.location.state.title}  gameType="searchGames" list="full"/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.games.searchGames.loading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
