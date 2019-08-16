import React from 'react'

function Title(props) {
    return (
        <div className="title-container">
            <h2 className="title__text"><strong>BGB</strong></h2>
            <img className="title__logo" src={require("./Images/site-logo.png")} alt="site logo"/>
        </div>
    )
}

export default Title
