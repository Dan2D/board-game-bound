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
        loading: state.games.newGames.loading
    }
}




function Hero(props) {

    const {getNewGames} = props;
    useEffect(() => {
        getNewGames();
    }, [getNewGames]);

    if (props.loading){return <div>Loading...</div>}
    return (
        <div>
            <Carousel />
        </div>
    )
}    
export default connect(mapStateToProps, mapDispatchToProps)(Hero);


