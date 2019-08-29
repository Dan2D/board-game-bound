import axios from "axios";
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
    GET_NEW_PAGE} from "./types";
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
        return fetchXML(`https://www.boardgamegeek.com/xmlapi2/thing?type=boardgame&id=${ids}`)
    })
    .then(response => {
        let nodes = response.querySelectorAll('items item');
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

export const getdetailGameImg = (name, gameId = "0") => dispatch => {
    if (gameId !== "0"){
        return (
            fetchXML(`https://www.boardgamegeek.com/xmlapi2/thing?type=boardgame&id=${gameId}`)
            .then(response => {
                let img = response.querySelectorAll('items item image')[0].innerHTML;
                dispatch({
                    type: SET_DETAIL_IMG,
                    payload: img
                })
            })
        )
    }
    name = modifyName(name);
    getGameIds(`https://www.boardgamegeek.com/xmlapi2/search?thing=boardgame&query=${name}&exact=1`, 1)
    .then(id => {
        return fetchXML(`https://www.boardgamegeek.com/xmlapi2/thing?type=boardgame&id=${id}`)
    })
    .then(response => {
        let img = response.querySelectorAll('items item image')[0].innerHTML;
        dispatch({
            type: SET_DETAIL_IMG,
            payload: img
        })
    })
}

export const getGameDetail = name => dispatch => {
    axios.get(`https://www.boardgameatlas.com/api/search?name=${name}&limit=1&client_id=7pxbmyR661`)
    .then (response => {
        let id = response.data.games[0].id;
        let backupImg = response.data.games[0].images.medium;
        getDetailBG(response.data.games, id, backupImg, dispatch);
    });
};

export const getDetailBG = (game, id, backupImg, dispatch) => {
    axios.get(`https://www.boardgameatlas.com/api/game/images?game_id=${id}&include_game=true&limit=1&client_id=7pxbmyR661`)
    .then(response => {
        let bg = response.data.images ? backupImg : response.data.images[0].large;
        getDetailPrice(game, id, backupImg, bg, dispatch);
    });
}

export const getDetailPrice = (game, id, backupImg, bg, dispatch) => {
    axios.get(`https://www.boardgameatlas.com/api/game/prices?game_id=${id}&client_id=7pxbmyR661`)
    .then(response => {
        let purchaseInfo = response.data.prices.sort((a,b) => {
            let aPrice = a.price_text;
            let bPrice = b.price_text;
            aPrice = aPrice[0] === "$" ? aPrice.substr(1) : 999.99;
            bPrice = bPrice[0] === "$" ? bPrice.substr(1) : 999.99;
            return (parseFloat(aPrice) - parseFloat(bPrice));
        })
        .filter(item => item.price_text.toLowerCase() !== "out of stock");
        dispatch({
            type: SET_DETAIL_GAME,
            payload: game[0],
            bg,
            purchaseInfo
        })
    })
}

export const getSearchResults = searchTxt => dispatch => {
    if (searchTxt === "*") {searchTxt = ""}
    axios.get(`https://www.boardgameatlas.com/api/search?name=${searchTxt}&client_id=7pxbmyR661`)
    .then(response => {
        dispatch({
            type: SET_SEARCH_GAMES,
            payload: response.data.games
        })
    })
}

export const getCategories = dispatch => {
    let categoryList = [2, 10, 12, 13, 20, 22, 33, 43, 67, 76, 81, 88, 96, 101];
    axios.get(`https://www.boardgameatlas.com/api/game/categories?pretty=true&client_id=7pxbmyR661`)
    .then(response => {
        let categories = {};
        categoryList.forEach((category) => {
            categories[response.data.categories[category]['name']] = response.data.categories[category]['id'];
        });
        dispatch({
            type: SET_CATEGORIES,
            payload: categories
        })
    })
}

export const getCategoryResults = category => dispatch => {
    let url;
    if (category.toLowerCase() === "top games"){
        url = `https://www.boardgameatlas.com/api/search?order_by=reddit_week_count&client_id=7pxbmyR661`;
    }
    else if (category.toLowerCase() === "trending games"){
        url = `https://www.boardgameatlas.com/api/search?order_by=popularity&client_id=7pxbmyR661`
    }
    else{url = `https://www.boardgameatlas.com/api/search?categories=${category}&client_id=7pxbmyR661`}
    axios.get(url)
    .then(response => {
        dispatch({
            type: SET_SEARCH_GAMES,
            payload: response.data.games
        })
    })
}

export const filterGames = (filterObj, filterName, checkVal) => dispatch => {
    dispatch({
        type: FILTER_GAMES,
        payload: filterObj,
        filterName,
        checkVal
    })
}

export const sortGames = (sort, top) => dispatch => {
    console.log(sort, top)
    dispatch({
        type: SORT_GAMES,
        sort,
        top
    })
}

export const newPage = (pg) => dispatch => {
    dispatch({
        type: GET_NEW_PAGE,
        payload: pg
    })
}

export const setGameLoading = (name, bool) => {
    let gameType = name === "new" ? "newGames" : name === "search" ? "searchGames" : name === "detail" ? "detailGame" : "trendingGames";
    return {type: GAMES_LOADING,
            name: gameType, 
            payload: bool}
}

export const genFilterObj = (category, type, val) => {
    let categories = {
        "players": "_players",
        "time": "_playtime",
        "age": "_age",
        "year": "year_published",
        "discount": "discount",
        "price": "price",
        "rating": "average_user_rating"
    };
    if (category === "players" || category === "time" || category === "age") {
        let prefix = "";
        if (type === "gt" || type === ">") {
            prefix = "min"
        }
        else if (type === "lt" || type === "<"){
            prefix = "max"
        }
        return {name: prefix + categories[category], type, val}
    }
    return {name: categories[category], type, val}
}



export const fetchXML = url => {
    return(
        axios.get(url)
        .then(response => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(response.data, "text/xml");
            return xml;
        })
    )
}

export const getGameIds = (url, num) => {
    return (
        fetchXML(url)
        .then(xml => {
            let nodes = xml.querySelectorAll('items item');
            let ids = [];
            for (let i = 0; i < num; i++){
                ids.push(nodes[i].getAttribute("id"));
            }
            return ids = ids.join(",");
        })
    )    
}

export const modifyName = name => {
    return name.replace(/(\s)?[\d](st|nd|rd|th)?(.*)/gi, "");
}


