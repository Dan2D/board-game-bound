import React from 'react'

function NotFound(props) {
    return (
        <div className="not-found">
            <img className="not-found__img" src={require("./Images/not-found.png")} alt="two men playing chess"/>
            <p className="not-found__msg">Sorry! We couldn't find what you're looking for...</p>
        </div>
    )
}

export default NotFound
