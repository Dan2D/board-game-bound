import React from 'react'

function Description(props) {
    setTimeout(() => {document.getElementById("description").innerHTML = props.dscrpt}, 500);
    return (
        <div className="description-container">
            <p className="detail-game-block__dscrpt-title"><strong>Description</strong></p>
            <p className="detail-game-block__dscrpt-body" id="description"></p>
            <div className="detail-game-block__site-url">
                <p><strong>Official Website:</strong></p>
                <a href={props.url} target="_blank" rel="noopener noreferrer">
                    {props.url}
                </a>
            </div>
        </div>
    )
}

export default Description
