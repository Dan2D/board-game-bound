import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import {getNewGames} from "../../Store/Actions/gamesActions";
import PropTypes from 'prop-types'
import Carousel from "./Carousel";

const mapDispatchToProps = dispatch => {
    return {
        getNewGames: () => {
            dispatch(getNewGames);
        }
    }
}
const mapStateToProps = (state) => {
    return {
        content: state.games.content,
        loading: state.games.newGames.loading
    }
}




function Hero(props) {

    const {getNewGames} = props;
    useEffect(() => {
        getNewGames();
    }, [getNewGames]);

    if (props.loading){return <div>Loading...</div>}
    return <Carousel />
}    
export default connect(mapStateToProps, mapDispatchToProps)(Hero);


