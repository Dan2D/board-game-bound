import React from 'react'
import {Link} from "react-router-dom";
import { connect } from 'react-redux'
import { Carousel as GameCarousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// TODO (FIND OUT HOW TO ADD GAME NAME STATIC TO CAROUSEL)
function Carousel(props) {
    let slideArr = props.games.map((game, indx) => {
        return (
            <div key={game.name}>
                <Link className="carousel__lnk" to={`/game/${game.name.replace(" ", "%20")}`}>
                    <img className="carousel__image"src={game.image} alt={game.name}/>
                </Link>
            </div>
        );
    });

 
    return (
    <div className="carousel-container">
            <GameCarousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={12000}
            transitionTime={1000}
            >
                {slideArr}
            </GameCarousel>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        games: state.games.newGames.list
    }
}

export default connect(mapStateToProps)(Carousel)
