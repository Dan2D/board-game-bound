import React from 'react'
import Accordian from "../Parts/Accordian";

function Price(props) {
    return (
        <div>
            {props.price.slice(0) !== props.msrp ? 
            <p className={`${props.class}__price`}>
                {props.price}
            </p> 
            : null}
            <p className={`${props.class}__msrp` + (props.msrp !== props.price ? "--strike" : null)}>
                MSRP {`$${props.msrp}`}
            </p>
            {props.class === "detail" ? <Accordian class={props.class} content={props.buyLnks} title="Buy Links"/> : null}
        </div>
    )
}

export default Price
