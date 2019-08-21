import React, {useEffect} from 'react'
import {getSummaryGames} from "../../Store/Actions/gamesActions";
import {connect} from "react-redux";
import Hero from "../Hero/Hero";
import List from "../Parts/Lists/List";

const mapDispatchToProps = dispatch => {
    return {
        getSummaryGames: (criteria) => {
            dispatch(getSummaryGames(criteria));
        }
    }
}

function Home(props) {
    const {getSummaryGames} = props;
    useEffect(() => {
        getSummaryGames("popularity");
        getSummaryGames("top");
    }, [getSummaryGames])

    return (
        <div className="hero-container">
            <Hero />
            <List title="TRENDING GAMES" gameList={props.trendingGames} gameType="trendingGames" list="summary"/>
            <List title="TOP GAMES" gameList={props.topGames} gameType="topGames" list="summary"/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        topGames: state.games.topGames.list,
        trendingGames: state.games.trendingGames.list
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
