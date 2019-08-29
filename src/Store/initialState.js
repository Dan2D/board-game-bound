export const initialState = {
    games: {
        content: "home",
        newGames: {
            list: {},
            loading: true
        },
        trendingGames: {
            list: {},
            loading: true
        },
        topGames: {
            list: {},
            loading: true
        },
        dealGames: {
            list: {},
            loading: true
        },
        searchGames: {
            list: {},
            modList: null,
            filter: false,
            loading: true,
            pg: 1
        },
        detailGame: {
            game: {},
            loading: true
        },
        categories: {
            list: [],
            loading: true
        }
    }
};