import React from 'react'

function Price(props) {
    return (
        <div>
            {props.discount > 0 ? 
            <p className={`${props.class}__price`}>
                ${props.price}
            </p> 
            : null}
            <p className={`${props.class}__msrp` + (props.msrp !== props.price ? "--strike" : null)}>
                MSRP {`$${props.msrp}`}
            </p>
        </div>
    )
}

export default Price
