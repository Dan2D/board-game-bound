import React from 'react'

function Icon(props) {
    if (props.min === null || props.max === null){
        return null;
    }
    let text = props.min === props.max ?
    <span>{props.min}</span> :
    <span>{`${props.min} - ${props.max}`}</span>;

    return (
        <div className={`icon-set icon-set--${props.name}`}>
            <img src={require("" + props.path)} alt={props.name}/>
            {text}
        </div>
    )
}

export default Icon
