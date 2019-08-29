import {
    GAMES_LOADING, 
    SET_CATEGORIES, 
    GET_NEW_GAMES, 
    GET_SUMMARY_GAMES, 
    SET_DETAIL_GAME, 
    SET_DETAIL_IMG, 
    SET_SEARCH_GAMES, 
    FILTER_GAMES, 
    SORT_GAMES,
    GET_NEW_PAGE} from "../Actions/types";

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
                content: "home",
                [gameType]: {
                list: action.payload,
                loading: false
                }
            }
        case SET_DETAIL_GAME:
            return {
                ...state,
                content: "detail",
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
        case SET_SEARCH_GAMES:
            return {
                ...state,
                content: "search",
                searchGames: {
                    ...state.searchGames,
                    list: action.payload,
                    modList: action.payload,
                    loading: false
                }
            }
        case SET_CATEGORIES:
            return {
                ...state,
                categories: {
                    list: action.payload,
                    loading: false
                }
            }
        case SORT_GAMES:
            let sortedList = [...state.searchGames.modList];
            if (action.sort !== "none") {
                sortedList = sortedList.sort((a,b) => {
                    if (action.top === "high"){
                        if (action.sort === "name") {
                            return a[action.sort] > b[action.sort];
                        }
                        return parseFloat(a[action.sort]) < parseFloat(b[action.sort]);
                    }
                    else {
                        if (action.sort === "name") {
                            return a[action.sort] < b[action.sort];
                        }
                        return parseFloat(a[action.sort]) > parseFloat(b[action.sort]);
                    }
                });
            }
            else {sortedList = [...state.searchGames.list]}

            return {
                ...state,
                searchGames: {
                    ...state.searchGames,
                    modList: sortedList
                }
            }
        case FILTER_GAMES:
            let filteredList = state.searchGames.list;
            if (Object.keys(action.payload).length === 0){
                return {
                    ...state,
                    searchGames: {
                        ...state.searchGames,
                        modList: state.searchGames.list,
                        filter: false
                    }
                }
            }
            if (action.checkVal){
                filteredList = !state.searchGames.filter ? state.searchGames.list : state.searchGames.modList
                if (action.payload[0].name.includes("-")){
                    filteredList = filteredList.filter(game => {return game[action.payload[0].minName] >= action.payload[0].min && game[action.payload[0].maxName] <= action.payload[0].max});
                }
                else if (action.payload[0].name.includes("+")){
                    if (action.payload[0].max !== null){
                    filteredList = filteredList.filter(game => {return game[action.payload[0].minName] > action.payload[0].min && game[action.payload[0].maxName] >= action.payload[0].max});
                    }
                    else {
                        filteredList = filteredList.filter(game => {return game[action.payload[0].minName] >= action.payload[0].min});
                    }
                }
                else if (action.payload[0].name.includes("<")){
                    filteredList = filteredList.filter(game => {return game[action.payload[0].maxName] <= action.payload[0].max});
                }
            }
            else {
                filteredList = state.searchGames.list;
                action.payload.forEach(filter => {
                    if (filter.name.includes("-")){
                        filteredList = filteredList.filter(game => {return game[filter.minName] >= filter.min && game[filter.maxName] <= filter.max});
                    }
                    else if (filter.name.includes("+")){
                        if (filter.max !== null){
                        filteredList = filteredList.filter(game => {return game[filter.minName] > filter.min && game[filter.maxName] >= filter.max});
                        }
                        else {
                            filteredList = filteredList.filter(game => {return game[filter.minName] >= filter.min});
                        }
                    }
                    else if (filter.name.includes("<")){
                        filteredList = filteredList.filter(game => {return game[filter.maxName] <= filter.max});
                    }
                })
            }
            
            return {
                ...state,
                searchGames: {
                    ...state.searchGames,
                    modList: filteredList,
                    filter: true
                }
            }
        case GET_NEW_PAGE:
            return {
                ...state,
                searchGames: {
                    ...state.searchGames,
                    pg: action.payload
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