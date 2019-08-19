import React, {useState} from 'react'

function Accordian(props) {
    const [toggle, setToggle] = useState(false);
    let priceArr = props.content;
    priceArr.sort((a,b) => {
        let aPrice = a.price_text;
        let bPrice = b.price_text;
        aPrice = aPrice[0] === "$" ? aPrice.substr(1) : 999.99;
        bPrice = bPrice[0] === "$" ? bPrice.substr(1) : 999.99;
        return (parseFloat(aPrice) - parseFloat(bPrice));
    })
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
            {genBuyLnks(priceArr)}
        </div>
    )
}

export default Accordian
