import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import GameList from "./GameList";
import InfoList from "./InfoList";
import Pagination from "../Pagination";

function List(props) {
    let games = props.gameType === "searchGames" && props.games.modList !== null ? props.games.modList : props.games.list;
    // let pg = 0;
    if (props.games.loading){
        return <div>LOADING...</div>
    }
    // TODO(START GAME LIST INDX BASED ON PAGE)
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
        for (let i = indxStart; i < indxStart + pgLimit; i++){
            console.log(Object.keys(games).length);
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








    //     const gameList = games.map((game, indx) => {
    //     if ((props.list === "summary" && indx > 4) || indx > 15){
    //         return null;
    //     }
    //     let rating = game.average_user_rating;
    //     if (!game.average_user_rating){
    //         rating = 0;
    //     }
    //     return (
    //     <li key={game.name} className="list-item">
    //         <Link className="list-item__lnk" to={`/game/${game.name}/0`}>
    //         <GameList 
    //         gameType={props.gameType}
    //         src={game.images.small}
    //         discount={game.discount}
    //         name={game.name}
    //         rank={indx}
    //         />
    //         <InfoList 
    //         name={game.name}
    //         id={game.id}
    //         year={game.year_published}
    //         publisher={game.primary_publisher}
    //         minPlayers={game.min_players}
    //         maxPlayers={game.max_players}
    //         minTime={game.min_playtime}
    //         maxTime={game.max_playtime}
    //         minAge={game.min_age}
    //         price={game.price}
    //         msrp={game.msrp}
    //         discount={game.discount}
    //         rating={rating}
    //         />
    //         </Link>
    //     </li>)
    // });

    return (
        <div className={`list-${props.list}-container`}>
            <Link className={`list-${props.list}__lnk list-${props.list}__lnk--title`} to={`/list/category/${props.title.toLowerCase()}`}>
                <h3 className={`list-${props.list}__title`}>{props.title}</h3>
            </Link>
            <ul className={`list-${props.list}__list`}>
                {gameList}
            </ul>
            {props.list === "full" ? <Pagination results={Object.keys(props.games.modList).length}/> :
            <Link className={`list-${props.list}__lnk`} to={`/list/category/${props.title.toLowerCase()}`}>
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
