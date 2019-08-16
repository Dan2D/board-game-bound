import React from 'react'
import Rating from "../Rating";
import Icon from "../Icon";

function InfoList(props) {
    const price = props.price === "0.00" ? "Unavailable" : `$${props.price}`;
    return (
        <div className="list-item__info-block">
            <div className="info-block--top">
                <div className="info-block__main">
                    <h5 className="info-block__title">{props.name}</h5>
                    <p className="info-block__pub-year">{props.year}</p>
                    <p className="info-block__publisher"><strong>Publisher: </strong>{props.publisher}</p>
                </div>
                 <Rating rating={props.rating}/>
            </div>
            <div className="info-block--bottom">
                <Icon path="./Images/player-icon.png" name="players" min={props.minPlayers} max={props.maxPlayers} />
                <Icon path="./Images/time-icon.png" name="time" min={props.minTime} max={props.maxTime} />
                <div>
                {props.discount > 0 ? <p className="info-block__price"><strong>Price </strong>{price}</p> : null}
                <p className={"info-block__msrp" + (props.msrp !== props.price ? "--strike" : null)}><strong>MSRP </strong>{`$${props.msrp}`}</p>
                </div>
                
            </div>
        </div>
    )
}

export default InfoList
