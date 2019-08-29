import React from 'react';
import { connect } from 'react-redux'
import {sortGames} from "../../../Store/Actions/gamesActions";

const mapDispatchToProps = dispatch => {
    return {
        sortGames: (sort, flow) => {
            dispatch(sortGames(sort, flow));
        }
    }
}

function Sort(props) {
    const {sortGames} = props;
    function handleSort(e){
        let sort = e.target.attributes["sort"].value;
        let top = e.target.attributes["top"].value;
        sortGames(sort, top)
    }
    const sortIcon = require("../Images/sort-icon.png");
    return (
        <div className="sort-container">
           <select className="sort-container__select" style={{backgroundImage: 'url('+ sortIcon + ')'}}>
               <option className="sort-container__option" value="Relavence" sort="none" top="none" onClick={(e) => handleSort(e)}>Relavence</option>
               <option className="sort-container__option" value="Latest" sort="year_published" top="high" onClick={(e) => handleSort(e)}>Latest</option>
               <option className="sort-container__option"  value="Rating" sort="average_user_rating" top="high" onClick={(e) => handleSort(e)}>Rating</option>
               <option className="sort-container__option"  value="Lowest Price" sort="price" top="low" onClick={(e) => handleSort(e)}>Lowest Price</option>
               <option className="sort-container__option"  value="A-Z" sort="name" top="high" onClick={(e) => handleSort(e)}>A - Z</option>
               <option className="sort-container__option" value="Z-A" sort="name" top="low" onClick={(e) => handleSort(e)}>Z - A</option>
           </select>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Sort)