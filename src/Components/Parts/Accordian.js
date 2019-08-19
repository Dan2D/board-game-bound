import React, {useState} from 'react'

function Accordian(props) {
    const [toggle, setToggle] = useState(false);
    let priceArr = props.content;

    function genBuyLnks(content){
       return content.map(item => {
           return( 
           <div key={item.store_name} className="buy-lnk">
                <p>{`Store: ${item.store_name}`}</p>
                <p>{`Price: ${item.price_text}`}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a>
            </div> 
            )
            }
        )
    }
    return (
        <div className={`accordian-container accordian--${toggle ? "open" : "closed"} accordian--${props.class}`}>
            <button className={`accordian`} onClick={() => setToggle(!toggle)}>{props.title}<img src={require("./Images/arrow-icon.png")} alt="arrow"/></button>
            {priceArr.length > 0 ? genBuyLnks(priceArr) : <p>No Stock Available...</p>}
        </div>
    )
}

export default Accordian
