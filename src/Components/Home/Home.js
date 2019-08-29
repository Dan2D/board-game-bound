import React, {useEffect} from 'react'
import {getSummaryGames, setGameLoading} from "../../Store/Actions/gamesActions";
import {connect} from "react-redux";
import Hero from "../Hero/Hero";
import List from "../Parts/Lists/List";
import CategoryBtn from "../Parts/CategoryBtn";
import Loader from "../Parts/Loader";

const mapDispatchToProps = dispatch => {
    return {
        setGameLoading: (name, bool) => {
            dispatch(setGameLoading(name, bool));
        },
        getSummaryGames: (criteria) => {
            dispatch(getSummaryGames(criteria));
        }
    }
}

function Home(props) {
    const {setGameLoading, getSummaryGames} = props;
    useEffect(() => {
        setGameLoading("new", true);
        getSummaryGames("popularity");
        getSummaryGames("top");
    }, [setGameLoading,getSummaryGames])

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
            <h4 className="category__title">CATEGORIES</h4>
            <div className="category-container--btns">
                    {categoryBtnArr}
            </div>
            <div>
                <List title="TRENDING GAMES" gameList={props.trendingGames} gameType="trendingGames" list="summary"/>
                <List title="TOP GAMES" gameList={props.topGames} gameType="topGames" list="summary"/>
            </div>
            <Loader loading={["newGames", "topGames", "trendingGames"]} page="home"/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        newGames: state.games.newGames,
        topGames: state.games.topGames.list,
        trendingGames: state.games.trendingGames.list,
        categories: state.games.categories.list
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
