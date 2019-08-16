import React from 'react'

function Rating(props) {
    let rating = props.rating === 0.00 ? "?" : props.rating.toFixed(2);
    return (
        <div className={`rating rating--${props.class}`}>
            <strong>{rating}</strong>
        </div>
    )
}

export default Rating
