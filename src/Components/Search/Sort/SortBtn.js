import React from 'react'

function SortBtn(props) {
    // TODO(REMOVE ACTIVE STATUS WHEN GO TO OTHER PAGE)
    function handleSort(e){
        document.querySelectorAll(".sort-btn").forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");
        return props.onClick(e.target)
    }

    return (
            <button className="sort-btn" data-sort={props.sort} data-top={props.top} onClick={(e) => handleSort(e)}>
                {props.title}
                <img src={require("../Images/sort-icon.png")} alt="sort icon"/>
            </button>
    )
}

export default SortBtn
