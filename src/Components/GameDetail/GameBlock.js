import React from 'react'
import { connect } from 'react-redux'
import Rating from "../Parts/Rating";
import Icon from "../Parts/Icon";
import Price from "../Parts/Price";
import Description from "./Description";
import MakerBlock from "./MakerBlock";


function GameBlock(props) {
    let price = props.buyLnks.length < 1 ? "$0.00" : props.buyLnks[0].price_text;
    let rating = props.game.num_user_ratings < 1 ? 0 : props.game.average_user_rating;
    return (
        <div className="detail-game-block">
            <img className="detail-game-block__bg" style={{backgroundImage: `url("${props.bg}")`}} src={require("./Images/bg-overlay.png")} alt="board game cover" />
            <Rating class="detail" rating={rating} numReviews={props.game.num_user_ratings}/>
            <div className="detail-game-block--layout">
                <div className="detail-game-block__title-container">
                    <h3 className="detail-game-block__title">{props.game.name.toUpperCase()}</h3>
                    <p className="detail-game-block__year">{props.game.year_published}</p>
                </div>
                <div>
                    <img className="detail-game-block__cover" src={props.image} alt={props.game.name} />
                    <div className="detail-game-block__icon-set">
                        <Icon type="detail" path="./Images/player-icon.png" name="players" min={props.game.min_players} max={props.game.max_players} />
                        <Icon type="detail" path="./Images/time-icon.png" name="time" min={props.game.min_playtime} max={props.game.max_playtime} />
                        <Icon type="detail" path="./Images/age-icon.png" name="age" min={props.game.min_age}/>
                    </div>
                </div>
                <Price class="detail" price={price} msrp={props.game.msrp} discount={props.game.discount} buyLnks={props.buyLnks}/>
                <Description dscrpt={props.game.description} url={props.game.official_url ? props.game.official_url  : props.game.url} rules={props.game.rules_url}/>
                <MakerBlock designers={props.game.designers} artists={props.game.artists} publisher={props.game.primary_publisher}/>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        game: state.games.detailGame.game,
        bg: state.games.detailGame.bg,
        image: state.games.detailGame.image,
        buyLnks: state.games.detailGame.purchaseInfo
        
    }
}

export default connect(mapStateToProps)(GameBlock)
