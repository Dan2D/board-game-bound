import {GAMES_LOADING, GET_NEW_GAMES, GET_SUMMARY_GAMES} from "../Actions/types";

const gamesReducer = (state = {}, action) =>{
    switch(action.type){
        case GET_NEW_GAMES:
            return {
                ...state,
                newGames: {
                    list: action.payload,
                    loading: false
                }
            }
        case GET_SUMMARY_GAMES:
            let gameType;
            if (action.criteria === "popularity"){
                gameType = "trendingGames";
            }
            else {gameType = "dealGames"}
            return {
                ...state,
                [gameType]: {
                list: action.payload,
                loading: false
                }
            }
        case GAMES_LOADING:
            return {
                ...state,
                [action.name]: {
                    ...state,
                    loading: action.payload
                }
            }
        default:
            return state;
    }
}

export default gamesReducer;