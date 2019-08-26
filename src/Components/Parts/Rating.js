import React from 'react'

function Rating(props) {
    // TODO (CHANGE RATING COLORS LATER)
    let color;
    let rating = !props.rating ? "?" : props.rating.toFixed(2);
    switch(props.rating.toFixed(0)){
        case "0":
        case "1": 
            color = "#007360";
            break
        case "2":
            color = "#007951";
            break
        case "3":
            color = "#56A500";
            break
        case "4":
            color = "#AEB500";
            break
        case "5":
            color = "#B6B200";
            break
        default:
            color = 'blue';
    }
    return (
        <div className={`rating rating--${props.class} ${rating === "?" ? "rating--none" : ""}`} style={{background: color, borderColor: color}}>
            <strong>{rating}</strong>
            {props.class === "detail" ? <p className="rating__reviews">{`(${props.numReviews} reviews)`}</p> : null}
        </div>
    )
}

export default Rating
