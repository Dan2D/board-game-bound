import axios from "axios";
import {GAMES_LOADING, GET_NEW_GAMES, GET_SUMMARY_GAMES, SET_DETAIL_GAME, SET_DETAIL_IMG} from "./types";
import {API_CALLS} from "../../Utils/API_CALLS";

const {CLIENT_ID} = API_CALLS["BGA"];


export const getSummaryGames = (criteria = "popularity") => dispatch => {
    let url;
    if (criteria === "popularity"){
        url = `https://www.boardgameatlas.com/api/search?order_by=popularity&limit=50&client_id=7pxbmyR661`;
    }
    if (criteria === "discount") {
        url =  `https://www.boardgameatlas.com/api/search?order_by=discount&lt_discount=0.5&limit=5&client_id=7pxbmyR661`;
    }
    if (criteria === "top"){
        url = `https://www.boardgameatlas.com/api/search?order_by=reddit_week_count&limit=5&client_id=7pxbmyR661`
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
    getGameIds(`https://www.boardgamegeek.com/xmlapi2/hot?type=boardgame`, 5)
    .then(ids => {
        console.log(`https://www.boardgamegeek.com/xmlapi2/thing?type=boardgame&id=${ids}`)
        return axios.get(`https://www.boardgamegeek.com/xmlapi2/thing?type=boardgame&id=${ids}`)
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
                year_pub: game.querySelector("yearpublished").getAttribute("value"),
                image: game.querySelector("image").innerHTML
            });
        })
        dispatch({
            type: GET_NEW_GAMES,
            payload: games
        })
    });
};

export const getdetailGameImg = name => dispatch => {
    // TODO(PASS YEAR PUBLISHED WITH NAME TO GET BETTER MATCH OF GAME)
    console.log(`https://www.boardgamegeek.com/xmlapi2/search?thing=boardgame&query=${name}&exact=1`)
    getGameIds(`https://www.boardgamegeek.com/xmlapi2/search?thing=boardgame&query=${name}&exact=1`, 1)
    .then(id => {
        console.log(`https://www.boardgamegeek.com/xmlapi2/thing?type=boardgame&id=${id}`)
        axios.get(`https://www.boardgamegeek.com/xmlapi2/thing?type=boardgame&id=${id}`)
        .then(response => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(response.data, "text/xml");
            let img = xml.querySelectorAll('items item image')[0].innerHTML;
            dispatch({
                type: SET_DETAIL_IMG,
                payload: img
            })
        })
    })
}

export const getGameDetail = name => dispatch => {
    console.log(`https://www.boardgameatlas.com/api/search?name=${name}&limit=1&client_id=7pxbmyR661`)
    axios.get(`https://www.boardgameatlas.com/api/search?name=${name}&limit=1&client_id=7pxbmyR661`)
    .then (response => {
        let id = response.data.games[0].id;
        let backupImg = response.data.games[0].images.medium;
        getDetailBG(response.data.games, id, backupImg, dispatch);
    });
};

export const getDetailBG = (game, id, backupImg, dispatch) => {
    console.log(`https://www.boardgameatlas.com/api/game/images?game_id=${id}&include_game=true&limit=1&client_id=7pxbmyR661`)
    axios.get(`https://www.boardgameatlas.com/api/game/images?game_id=${id}&include_game=true&limit=1&client_id=7pxbmyR661`)
    .then(response => {
        let bg = response.data.images ? backupImg : response.data.images[0].large;
        dispatch({
            type: SET_DETAIL_GAME,
            payload: game[0],
            bg
        });
    });
}

export const setGameLoading = (name, bool) => {
    let gameType = name === "new" ? "newGames" : name === "search" ? "searchGames" : name === "detail" ? "detailGame" : "trendingGames";
    return {type: GAMES_LOADING,
            name: gameType, 
            payload: bool}
}


export const genRand = () => {
    return Math.ceil(Math.random()*100);
}

export const getGameIds = (url, num) => {
    return (
        axios.get(url)
        .then(response => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(response.data, "text/xml");
            let nodes = xml.querySelectorAll('items item');
            let ids = [];
            for (let i = 0; i < num; i++){
                ids.push(nodes[i].getAttribute("id"));
            }
            return ids = ids.join(",");
            })
    )
}

