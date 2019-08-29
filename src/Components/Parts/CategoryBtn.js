import React from 'react'
import {Link} from "react-router-dom";

function CategoryBtn(props) {
    return (
        <Link to={{pathname: `/list/category/${props.categoryId}`, state: {title: props.btnText}}}>
            <button className="category-btn">
                {props.btnText}
            </button>
        </Link>
    )
}

export default CategoryBtn
