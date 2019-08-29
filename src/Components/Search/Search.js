import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import {getSearchResults, getCategoryResults, setGameLoading} from "../../Store/Actions/gamesActions";
import List from "../Parts/Lists/List";
import NotFound from "./NotFound";
import Loader from "../Parts/Loader";



const mapDispatchToProps = dispatch => {
    return {
        setGameLoading: (name, bool) => {
            dispatch(setGameLoading(name, bool));
        },
        getSearchResults: (searchTxt) => {
            dispatch(getSearchResults(searchTxt));
        },
        getCategoryResults: (category) => {
            dispatch(getCategoryResults(category));
        }
    }
}

function Search(props) {
    const {setGameLoading, getSearchResults, getCategoryResults} = props;
    useEffect(() => {
        setGameLoading("search", true);
        if (props.match.params.searchType === "search"){
           return getSearchResults(props.match.params.text);
        }
        return getCategoryResults(props.match.params.text);
    }, [setGameLoading, getSearchResults, getCategoryResults, props.match.params])

    // if (props.loading){
    //     return <div>LOADING...</div>
    // }

    if (props.searchGames.length < 1) {
        return <NotFound />
    }


    return (
        <div>
            <Loader loading="searchGames" page="search" />
            {!props.loading && <List title={props.location.state.title}  gameType="searchGames" list="full"/>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.games.searchGames.loading,
        searchGames: state.games.searchGames.list
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
