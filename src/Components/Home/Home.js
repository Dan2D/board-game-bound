import React, {useEffect} from 'react'
import {getSummaryGames} from "../../Store/Actions/gamesActions";
import {connect} from "react-redux";
import Hero from "../Hero/Hero";
import List from "../Parts/Lists/List";
import CategoryBtn from "../Parts/CategoryBtn";

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

    const categoryBtnArr = Object.keys(props.categories).map((category, indx) => {
                            return (
                                <CategoryBtn 
                                key={category + indx} 
                                btnText={category} 
                                categoryId={props.categories[category]}
                                />
                                )
                            });
    return (
        <div>
            <div className="hero-container">
                <Hero />
            </div>
            <h4>CATEGORIES</h4>
            <div className="category-container">
                    {categoryBtnArr}
            </div>
            <div>
                <List title="TRENDING GAMES" gameList={props.trendingGames} gameType="trendingGames" list="summary"/>
                <List title="TOP GAMES" gameList={props.topGames} gameType="topGames" list="summary"/>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        topGames: state.games.topGames.list,
        trendingGames: state.games.trendingGames.list,
        categories: state.games.categories.list
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
