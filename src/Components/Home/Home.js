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
        getSummaryGames("discount");
    }, [getSummaryGames])

    return (
        <div className="hero-container">
            <Hero />
            <List title="TRENDING GAMES" type="trendingGames"/>
            <List title="DEALS" type="dealGames" />
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Home)
