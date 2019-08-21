import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import GameList from "./GameList";
import InfoList from "./InfoList";

function List(props) {
    const [filteredList, setFilteredList] = useState(props.games.list);
    // if (props.gameType === "searchGames")
    let games = props.gameType === "searchGames" && props.games.filteredList !== null ? props.games.filteredList : props.games.list;
if (props.games.loading){
    return <div>LOADING...</div>
}
        const gameList = games.map((game, indx) => {
        if ((props.list === "summary" && indx > 4) || indx > 14){
            return null;
        }
        let rating = game.average_user_rating;
        if (!game.average_user_rating){
            rating = 0;
        }
        return (
        <li key={game.name} className="list-item">
            <Link className="list-item__lnk" to={`/game/${game.name}/0`}>
            <GameList 
            gameType={props.gameType}
            src={game.images.small}
            discount={game.discount}
            name={game.name}
            rank={indx}
            />
            <InfoList 
            name={game.name}
            id={game.id}
            year={game.year_published}
            publisher={game.primary_publisher}
            minPlayers={game.min_players}
            maxPlayers={game.max_players}
            minTime={game.min_playtime}
            maxTime={game.max_playtime}
            minAge={game.min_age}
            price={game.price}
            msrp={game.msrp}
            discount={game.discount}
            rating={rating}
            />
            </Link>
        </li>)
    });

    return (
        <div className={`list-${props.list}-container`}>
            <h3 className={`list-${props.list}__title`}>{props.title}</h3>
            <ul className={`list-${props.list}__list`}>
                {gameList}
            </ul>
            <Link className={`list-${props.list}__lnk`} to={`/list/category/${props.title.toLowerCase()}`}>More Games...</Link>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        games: state.games[ownProps.gameType]
    }
}

export default connect(mapStateToProps)(List)
