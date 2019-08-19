import React from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import GameList from "./GameList";
import InfoList from "./InfoList";

function List(props) {
// TODO(Add arrow for accordian minize)
if (props.games.loading){
    return <div>LOADING...</div>
}
    const gameList = props.games.list.map((game, indx) => {
        if (props.list === "summary" && indx > 4){
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
            type={props.type}
            src={game.images.small}
            discount={game.discount}
            name={game.name}
            rank={indx}
            />
            <InfoList 
            type={props.type}
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
        <div className="list-summary-container">
            <h3 className="list-summary__title">{props.title}</h3>
            <ul className="list-summary__list">
                {gameList}
            </ul>
            <Link className="list-summary__lnk" to={`/category/${props.title}`}>More Games...</Link>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        games: state.games[ownProps.type]
    }
}

export default connect(mapStateToProps)(List)
