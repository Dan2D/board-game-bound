export const filterTypes = {
    "players": {
        "1-2": {name: "1-2",
                minName: "min_players", 
                min: 1, 
                maxName: "max_players", 
                max: 2},
        "2-4": {name: "2-4",
                minName: "min_players", 
                min: 2, 
                maxName: "max_players", 
                max: 4},
        "2+": {name: "2+",
               minName: "min_players",
               min: 0,
               maxName: "max_players", 
               max: 2},
        "3+": {name: "3+",
               minName: "min_players",
               min: 0,
               maxName: "max_players", 
               max: 3},
        "4+": {name: "4+",
               minName: "min_players",
               min: 0,
               maxName: "max_players", 
               max: 4},
    },
    "time": {
        "60+": {name: "60+",
                minName: "min_playtime",
                min: 0,
                maxName: "max_playtime",
                max: 60
                },
        "45-60": {name: "45-60",
                minName: "min_playtime",
                min: 45,
                maxName: "max_playtime",
                max: 60
                },
        "30-45": {name: "30-45",
                minName: "min_playtime",
                min: 30,
                maxName: "max_playtime",
                max: 45
                },
        "15-30": {name: "15-30",
                minName: "min_playtime",
                min: 15,
                maxName: "max_playtime",
                max: 30
                }
    },
    "age": {
        "21+": {name: "21+",
                minName: "min_age",
                min: 21,
                maxName: null,
                max: null
                },
        "18+": {name: "18+",
                minName: "min_age",
                min: 45,
                maxName: null,
                max: null
                },
        "13+": {name: "13+",
                minName: "min_age",
                min: 13,
                maxName: null,
                max: null
                },
        "10+": {name: "10+",
                minName: "min_age",
                min: 10,
                maxName: null,
                max: null
                },
    },
    "rating": {
        "4+": {name: "4+",
                minName: "average_user_rating",
                min: 4,
                maxName: null,
                max: null
                },
        "3+": {name: "3+",
                minName: "average_user_rating",
                min: 3,
                maxName: null,
                max: null
                },
        "2+": {name: "2+",
                minName: "average_user_rating",
                min: 2,
                maxName: null,
                max: null
                },
        "1+": {name: "1+",
                minName: "average_user_rating",
                min: 1,
                maxName: null,
                max: null
                },
    },
    "price": {
        "< $75": {
            name: "< $75",
            minName: null,
            min: null,
            maxName: "price",
            max: 75
        },
        "< $50": {
            name: "< $50",
            minName: null,
            min: null,
            maxName: "price",
            max: 50
        },
        "< $30": {
            name: "< $30",
            minName: null,
            min: null,
            maxName: "price",
            max: 30
        },
        "< $20": {
            name: "< $20",
            minName: null,
            min: null,
            maxName: "price",
            max: 20
        },
    }

};