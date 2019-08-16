import React from 'react'

function Rating(props) {
    let rating = !props.rating ? "?" : props.rating.toFixed(2);
    return (
        <div className={`rating ${rating === "?" ? "rating--none" : ""}`}>
            <strong>{rating}</strong>
        </div>
    )
}

export default Rating
