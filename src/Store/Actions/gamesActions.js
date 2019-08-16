import axios from "axios";
import {GAMES_LOADING, GET_NEW_GAMES, GET_SUMMARY_GAMES} from "./types";
import {API_CALLS} from "../../Utils/API_CALLS";

const {CLIENT_ID} = API_CALLS["BGA"];

export const getSummaryGames = (criteria = "popularity") => dispatch => {
    let url;
    if (criteria === "popularity"){
        url = `https://www.boardgameatlas.com/api/search?order_by=${criteria}&limit=5&client_id=7pxbmyR661`;
    }
    if (criteria === "discount") {
        url =  `https://www.boardgameatlas.com/api/search?order_by=${criteria}&lt_discount=0.5&limit=5&client_id=7pxbmyR661`;
    }
    return axios.get(url)
    .then(data => {
        dispatch({
            type: GET_SUMMARY_GAMES,
            payload: data.data.games,
            criteria
        });
    });
}

export const getNewGames = dispatch => {
    getGameIds()
    .then(ids => {
        return axios.get(`https://www.boardgamegeek.com/xmlapi2/thing=boardgame?id=${ids}`)
    })
    .then(response => {
        let parser = new DOMParser();
        let xml = parser.parseFromString(response.data, "text/xml");
        let nodes = xml.querySelectorAll('items item');
        let games = [];
        nodes.forEach(game => {
            games.push( {
                id: game.getAttribute("id"),
                name: game.querySelector("name").getAttribute("value"),
                image: game.querySelector("image").innerHTML
            });
        })
        dispatch({
            type: GET_NEW_GAMES,
            payload: games
        })
    });
};

export const setGameLoading = (name, bool) => {
    let gameType = name === "new" ? "newGames" : name === "search" ? "searchGames" : "trendingGames";
    return {type: GAMES_LOADING,
            name: gameType, 
            payload: bool}
}


export const genRand = () => {
    return Math.ceil(Math.random()*100);
}

export const getGameIds = () => {
    return (
        axios.get(`https://www.boardgamegeek.com/xmlapi2/hot?type=boardgame`)
        .then(response => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(response.data, "text/xml");
            let nodes = xml.querySelectorAll('items item');
            let ids = [];
            for (let i = 0; i < 5; i++){
                ids.push(nodes[i].getAttribute("id"));
            }
            return ids = ids.join(",");
            })
    )
}