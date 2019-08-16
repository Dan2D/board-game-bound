import React from 'react'
import {Link} from "react-router-dom";
import { connect } from 'react-redux'
import { Carousel as GameCarousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

function Carousel(props) {
    let slideArr = props.games.map((game, indx) => {
        return (
            <div key={game.name}>
                <Link className="carousel__lnk" to="/">
                    <img className="carousel__image" src={game.image} alt={game.name}/>
                </Link>
            </div>
        );
    });

    return (
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
    )
}

const mapStateToProps = (state) => {
    return {
        games: state.games.newGames.list
    }
}

export default connect(mapStateToProps)(Carousel)

{/* <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        currentSlide={slide}
        totalSlides={5}
        isPlaying={false}
        interval={10000}
        >
        <p className="carousel__tag">New Games</p>
        <Slider>
            {slideArr}
        </Slider>
        <button className="carousel__btn carousel__btn-L"  onClick={() => handleClick(-1)}>
            <img src={require("./Images/arrow-L.png")} alt="arrow left"/>
        </button>
        <button className="carousel__btn carousel__btn-R" onClick={() => handleClick(1)}>
            <img src={require("./Images/arrow-R.png")} alt="arrow right"/>
        </button>
        <DotGroup className="carousel__dot" />
        </CarouselProvider> */}