import React from 'react'

function MakerBlock(props) {
    function checkSngl(text){
        if (props[text].length > 1){
            return text[0].toUpperCase().concat(text.slice(1)) + ": ";
        }
        return text[0].toUpperCase().concat(text.slice(1, text.length - 1)) + ": ";
        
    }
    return (
        <div className="maker-container">
            <h2 className="detail-game-block__maker-title"><strong>MAKERS</strong></h2>
            <p className="detail-game-block__maker-text"><strong>{checkSngl("designers")}</strong>{props.designers.join(", ")}</p>
            <p className="detail-game-block__maker-text"><strong>{checkSngl("artists")}</strong>{props.artists.join(", ")}</p>
            <p className="detail-game-block__maker-text"><strong>Publisher: </strong>{props.publisher}</p>
        </div>
    )
}

export default MakerBlock
