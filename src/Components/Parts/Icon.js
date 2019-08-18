import React from 'react'

function Icon(props) {

    if (props.min === null && props.max === null){
        return null;
    }
    let text = (props.min === props.max) ?
    <span>{props.min}</span> :
    <span>{`${props.min} - ${props.max}`}</span>;
    if (props.name === "age"){
    text = <span>{props.min}+</span>;
    }
    return (
        <div className={`icon-set icon-set--${props.name}`}>
            <img src={require("" + props.path)} alt={props.name}/>
            {text}
            {props.type === "detail" ? <p className="icon-set__title">{props.name[0].toUpperCase().concat(props.name.slice(1))}</p> : null}
        </div>
    )
}

export default Icon
