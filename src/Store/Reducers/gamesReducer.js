import {GAMES_LOADING, GET_NEW_GAMES, GET_SUMMARY_GAMES, SET_DETAIL_GAME, SET_DETAIL_IMG} from "../Actions/types";

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
                gameType = "topGames";
                let sort = action.payload.sort((a,b) => a.average_user_rating < b.average_user_rating);
                action.payload = sort;
            }
            else if (action.criteria === "top"){
                gameType = "trendingGames"
            }
            else {gameType = "dealGames"}
            return {
                ...state,
                [gameType]: {
                list: action.payload,
                loading: false
                }
            }
        case SET_DETAIL_GAME:
            return {
                ...state,
                detailGame: {
                    ...state.detailGame,
                    game: action.payload,
                    bg: action.bg,
                    purchaseInfo: action.purchaseInfo,
                    loading: false
                }
            }
        case SET_DETAIL_IMG:
            return {
                ...state,
                detailGame: {
                    ...state.detailGame,
                    image: action.payload
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