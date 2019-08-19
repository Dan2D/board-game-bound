import React from 'react'

function GameList(props) {
    return (
        <div className="list-item__game-block">
            <img className="game-block__game-image" src={props.src} alt={props.name}/>
            {props.gameType === "dealGames" ? 
            <p className="game-block__discount">-{props.discount.slice(2)}%</p> : 
            <p className="game-block__rank">{`#${props.rank + 1}`}</p>}
            
        </div>
    )
}

export default GameList
