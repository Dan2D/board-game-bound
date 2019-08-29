import React from 'react';
import { connect } from 'react-redux'


function Loader(props) {
    function isLoadingDone(item) {
        return !Boolean(item);
    }

    if (props.loading.every(isLoadingDone)) {
        setTimeout(() => {
            document.querySelector(".loader-container").style.transition = "opacity 3s";
            document.querySelector(".loader-container").style.opacity = "0";
            setTimeout(() => {
                document.querySelector(".loader-container").remove();
            }, 2000)
        }, 500)

    }

    return (
        <div className="loader-container">
            <div className="loading-icon-container">
                <img className="loading-icon" src={require("./Images/loading-icon.png")} alt="loading icon"/>
                <img className="loading-icon--fixed" src={require("./Images/player-icon.png")} alt="player icon"/>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    if (ownProps.page === "home"){
        return {
            loading: [state.games.newGames.loading, state.games.topGames.loading, state.games.trendingGames.loading]
        }
    }
    return {
       loading: [state.games[ownProps.loading].loading]
    }
}

const MemoLoader = React.memo(Loader, (prevProps, nextProps) => {
    if (prevProps.loading.every(item => item === false)){
        return true
    }
})

export default connect(mapStateToProps)(MemoLoader)
