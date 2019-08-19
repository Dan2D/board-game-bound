import React from 'react'

function Rating(props) {
    let rating = !props.rating ? "?" : props.rating.toFixed(2);
    return (
        <div className={`rating rating--${props.class} ${rating === "?" ? "rating--none" : ""}`}>
            <strong>{rating}</strong>
            {props.class === "detail" ? <p className="rating__reviews">{`(${props.numReviews} reviews)`}</p> : null}
        </div>
    )
}

export default Rating
