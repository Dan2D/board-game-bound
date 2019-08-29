import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import GameList from "./GameList";
import InfoList from "./InfoList";
import Pagination from "../Pagination";

function List(props) {
    let games = props.gameType === "searchGames" && props.games.modList !== null ? props.games.modList : props.games.list;
    if (props.games.loading){
        return <div>LOADING...</div>
    }
    let gameList=[];
    let indxStart = props.pg === 1 ? 0 : (props.pg - 1) * 15;
    let resultsLng = Object.keys(games).length;
    const SUMMARY_INDX_LIMIT = 5;
    const SEARCH_INDX_LIMIT = 15;
    let pgLimit;
    if (props.gameType === "searchGames"){
        if (resultsLng >= 14){
            pgLimit = SEARCH_INDX_LIMIT;
        }
        else {
            pgLimit = resultsLng;
        }
    }
    else {
        pgLimit = SUMMARY_INDX_LIMIT;
    }
        for (let i = indxStart; (i < indxStart + pgLimit && i < resultsLng); i++){
            if (Object.keys(games).length < 1){
                return <div>No Games Found</div>
            }
        let rating = games[i].average_user_rating;
        if (!games[i].average_user_rating){
            rating = 0;
        }
        gameList.push(
        <li key={games[i].name} className="list-item">
            <Link className="list-item__lnk" to={`/game/${games[i].name}/0`}>
            <GameList 
            gameType={props.gameType}
            src={games[i].images.small}
            discount={games[i].discount}
            name={games[i].name}
            rank={i}
            />
            <InfoList 
            name={games[i].name}
            id={games[i].id}
            year={games[i].year_published}
            publisher={games[i].primary_publisher}
            minPlayers={games[i].min_players}
            maxPlayers={games[i].max_players}
            minTime={games[i].min_playtime}
            maxTime={games[i].max_playtime}
            minAge={games[i].min_age}
            price={games[i].price}
            msrp={games[i].msrp}
            discount={games[i].discount}
            rating={rating}
            />
            </Link>
        </li>)
}
    return (
        <div className={`list-${props.list}-container`}>
            <Link className={`list-${props.list}__lnk list-${props.list}__lnk--title`} to={{pathname: `/list/category/${props.title.toLowerCase()}`, state: {title: props.title.toUpperCase()}}}>
                <h3 className={`list-${props.list}__title`}>{props.title === "*" ? "SEARCH" : props.title}</h3>
            </Link>
            <ul className={`list-${props.list}__list`}>
                {gameList}
            </ul>
            {props.list === "full" ? <Pagination results={Object.keys(props.games.modList).length}/> :
            <Link className={`list-${props.list}__lnk`} to={{ pathname: `/list/category/${props.title.toLowerCase()}`, state: {title: props.title.toUpperCase()}}}>
                More Games...
            </Link> }
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        games: state.games[ownProps.gameType],
        pg: state.games.searchGames.pg
    }
}

export default connect(mapStateToProps)(List)
