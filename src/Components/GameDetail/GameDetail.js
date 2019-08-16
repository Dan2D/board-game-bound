import React, {useEffect} from 'react';
import {getGameDetail} from "../../Store/Actions/gamesActions";
import { connect } from 'react-redux'
import GameBlock from "./GameBlock"

const mapDispatchToProps = dispatch =>{
    return {
        getGameDetail: (name) => {
            dispatch(getGameDetail(name))
        }
    }
}

function GameDetail(props) {
    const {getGameDetail} = props;
    useEffect(() => {
        getGameDetail(props.match.params.gameId);
    }, [getGameDetail, props.match.params]);
    if (props.detailGame.loading){
        return <div>Loading...</div>;
    }
    return (
        <div>
            <GameBlock />
        </div>
    )
}
const mapStateToProps = state => {
    return {
        detailGame: state.games.detailGame
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(GameDetail)
