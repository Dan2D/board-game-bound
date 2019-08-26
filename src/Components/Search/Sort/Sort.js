import React, {useState} from 'react';
import { connect } from 'react-redux'
import {sortGames} from "../../../Store/Actions/gamesActions";
import SortBtn from "./SortBtn";

const mapDispatchToProps = dispatch => {
    return {
        sortGames: (sort, flow) => {
            dispatch(sortGames(sort, flow));
        }
    }
}

function Sort(props) {
    const {sortGames} = props;
    const [toggleSort, setToggleSort] = useState(false);
    function handleSort(sort){
        let data = sort.dataset;
        sortGames(data.sort, data.top)
    }
    return (
        <div className="sort-filter-container">
            <button className="search__btn search__btn--sort" onClick={() => setToggleSort(!toggleSort)}>
                Sort<img src={require("../Images/sort-icon.png")} alt="sort icon"/>
            </button>
            <div className={`sort-container sort-container${toggleSort ? "--show" : "--hide"}`}>
                <SortBtn title="Latest" sort="year_published" top="high" onClick={sort => handleSort(sort)}/>
                <div className="sort-container__group">
                    <SortBtn title="High to Low Rating" sort="average_user_rating" top="high" onClick={sort => handleSort(sort)}/>
                    <SortBtn title="Low to High Rating" sort="average_user_rating" top="low" onClick={sort => handleSort(sort)}/>
                </div>
                <div className="sort-container__group">
                    <SortBtn title="High to Low Prices" sort="price" top="high" onClick={(sort) => handleSort(sort)}/>
                    <SortBtn title="Low to High Prices" sort="price" top="low" onClick={(sort) => handleSort(sort)}/>
                </div>
                <div className="sort-container__group">
                    <SortBtn title="A - Z" sort="name" top="high" onClick={(sort) => handleSort(sort)}/>
                    <SortBtn title="Z - A" sort="name" top="low" onClick={(sort) => handleSort(sort)}/>
                </div>
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Sort)
