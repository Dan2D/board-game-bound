import React, {useEffect} from 'react';
import {getGameDetail, getdetailGameImg} from "../../Store/Actions/gamesActions";
import { connect } from 'react-redux'
import GameBlock from "./GameBlock"
import Rating from "../Parts/Rating";

const mapDispatchToProps = dispatch =>{
    return {
        getGameDetail: (name) => {
            dispatch(getGameDetail(name));
        },
        getdetailGameImg: (name, id) => {
            dispatch(getdetailGameImg(name, id));
        }
        
    }
}

function GameDetail(props) {
    const {getGameDetail, getdetailGameImg} = props;
    useEffect(() => {
        let id = props.match.params.gameId ? props.match.params.gameId : null;
        getGameDetail(props.match.params.gameName, id);
        getdetailGameImg(props.match.params.gameName, id);
    }, [getGameDetail, props.match.params, getdetailGameImg]);
    if (props.detailGame.loading){
        return <div>Loading...</div>;
    }
    return  <GameBlock />;
}
const mapStateToProps = state => {
    return {
        detailGame: state.games.detailGame
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(GameDetail)
