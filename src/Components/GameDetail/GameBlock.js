import React from 'react'
import { connect } from 'react-redux'


function GameBlock(props) {
    return (
        <div style={{backgroundImage: 'url("'+props.detailGame.bg+'")'}}>
            <h3>{props.detailGame.game[0].name}</h3>
            <p>{props.detailGame.game[0].year_published}</p>
            <div></div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.games.detailGame.game[0])
    return {
        detailGame: state.games.detailGame
    }
}

export default connect(mapStateToProps)(GameBlock)
