import React, {useState} from 'react';
import { connect } from 'react-redux'
import {filterGames} from "../../../Store/Actions/gamesActions";
import {filterTypes} from "./filterTypes";
import FilterList from "./FilterList";

const mapDispatchToProps = dispatch => {
    return {
        filterGames: (filterObj, filterName, checkVal) => {
            dispatch(filterGames(filterObj, filterName, checkVal));
        }
    }
}
// TODO(ADD SLIDER LATER)
function Filter(props) {
    
    const {filterGames} = props;
    const [toggleFilter, setToggleFilter] = useState(false);
    const [filters, setFilters] = useState([]);
    
    function handleFilters(e, checkboxVal) {
        let data = e.target.dataset;
        let filter = filterTypes[data.name][data.filter];
        if (checkboxVal){
            setFilters([filter, ...filters]);
            filterGames([filter, ...filters], data.filter, true);
        }
        else {
            let tempFilters = filters;
            setFilters(tempFilters.slice(1));
            filterGames(tempFilters.slice(1), data.filter, false);
        }
    }
    console.log(typeof window.location.pathname)
    return (
        <div >
        <div className="sort-filter-container">
                <button className="search__btn search__btn--filter" onClick={() => setToggleFilter(!toggleFilter)}>
                    Filter<img src={require("../Images/filter-icon.png")} alt="filter icon"/>
                </button>
            </div>
            <div className={`filter-container filter-container${toggleFilter ? "--show" : "--hide"}`}>
                <FilterList title="Players" filter="players" onChange={(e, checked) => handleFilters(e, checked)}/>
                <FilterList title="Play Time" filter="time" onChange={(e, checked) => handleFilters(e, checked)}/>
                <FilterList title="Age" filter="age" onChange={(e, checked) => handleFilters(e, checked)}/>
                <FilterList title="Rating" filter="rating" onChange={(e, checked) => handleFilters(e, checked)}/>
                <FilterList title="Price" filter="price" onChange={(e, checked) => handleFilters(e, checked)}/>
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Filter)
