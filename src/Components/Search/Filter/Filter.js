import React, {useState} from 'react';
import { connect } from 'react-redux'
import {filterGames} from "../../../Store/Actions/gamesActions";
import Checkbox from "../../Parts/Checkbox";
import {filterTypes} from "./filterTypes";

const mapDispatchToProps = dispatch => {
    return {
        filterGames: (filterObj, filterName, checkVal) => {
            dispatch(filterGames(filterObj, filterName, checkVal));
        }
    }
}

// TODO(INSERT INTO LIST AND CONDITIONALLY RENDER IF SEARCH)
function Filter(props) {
    const {filterGames} = props;
    const [toggleSort, setToggleSort] = useState(false);
    const [toggleFilter, setToggleFilter] = useState(false);
    const [filters, setFilters] = useState([]);
    
    function handleFilters(e, checkboxVal) {
        console.log(e.target, checkboxVal)
        let data = e.target.dataset;
        let filter = filterTypes[data.name][data.filter];
        console.log(filter, checkboxVal)
        if (checkboxVal){
           setFilters([filter, ...filters]);
                filterGames([filter, ...filters], data.filter, true)
        }
        else {
            let tempFilters = filters;
            setFilters(tempFilters.slice(1));
            filterGames(tempFilters.slice(1), data.filter, false);
        }
    }

    return (
        <div>
        <div className="sort-filter-set">
                <button className="search__btn search__btn--filter" onClick={() => setToggleFilter(!toggleFilter)}>
                    Filter<img src={require("../Images/filter-icon.png")} alt="filter icon"/>
                </button>
                <button className="search__btn search__btn--sort" onClick={() => setToggleSort(!toggleSort)}>
                    Sort<img src={require("../Images/sort-icon.png")} alt="sort icon"/>
                </button>
                <button onClick={() => console.log(filters)}>CLICK ME</button>
            </div>
            <div className="filter-list">
                    <p><strong>Players</strong></p>
                    <p className="filter-name">4+</p><Checkbox name="players" filter="4+" onChange={(e, checked) => handleFilters(e, checked)}/>
                    <br/>
                    <p className="filter-name">2-4</p><Checkbox name="players" filter="2-4" onChange={(e, checked) => handleFilters(e, checked)}/>
                    <br/>
                    <p className="filter-name">1-2</p><Checkbox name="players" filter="1-2" onChange={(e, checked) => handleFilters(e, checked)}/>
            </div>
            <div className="filter-list">
                    <p><strong>PlayTime</strong></p>
                    <p className="filter-name">60+</p><Checkbox name="time" filter="60+" onChange={(e, checked) => handleFilters(e, checked)}/>
                    <br/>
                    <p className="filter-name">45-60</p><Checkbox name="time" filter="45-60" onChange={(e, checked) => handleFilters(e, checked)}/>
                    <br/>
                    <p className="filter-name">30-45</p><Checkbox name="time" filter="30-45" onChange={(e, checked) => handleFilters(e, checked)}/>
                    <br/>
                    <p className="filter-name">15-30</p><Checkbox name="time" filter="15-30" onChange={(e, checked) => handleFilters(e, checked)}/>
            </div>
            <div className="filter-list">
                    <p><strong>Age</strong></p>
                    <p className="filter-name">21+</p><Checkbox name="age" filter="21+" onChange={(e, checked) => handleFilters(e, checked)}/>
                    <br/>
                    <p className="filter-name">18+</p><Checkbox name="age" filter="18+" onChange={(e, checked) => handleFilters(e, checked)}/>
                    <br/>
                    <p className="filter-name">13+</p><Checkbox name="age" filter="13+" onChange={(e, checked) => handleFilters(e, checked)}/>
                    <br/>
                    <p className="filter-name">10+</p><Checkbox name="age" filter="10+" onChange={(e, checked) => handleFilters(e, checked)}/>
            </div>
            <div className="filter-list">
                    <p><strong>Rating</strong></p>
                    <p className="filter-name">4+</p><Checkbox name="rating" filter="4+" onChange={(e, checked) => handleFilters(e, checked)}/>
                    <br/>
                    <p className="filter-name">3+</p><Checkbox name="rating" filter="3+" onChange={(e, checked) => handleFilters(e, checked)}/>
                    <br/>
                    <p className="filter-name">2+</p><Checkbox name="rating" filter="2+" onChange={(e, checked) => handleFilters(e, checked)}/>
                    <br/>
                    <p className="filter-name">1+</p><Checkbox name="rating" filter="1+" onChange={(e, checked) => handleFilters(e, checked)}/>
            </div>
            <div className="filter-list">
                    <p><strong>Price</strong></p>
                    <p className="filter-name">{"< $75"}</p><Checkbox name="price" filter="< $75" onChange={(e, checked) => handleFilters(e, checked)}/>
                    <br/>
                    <p className="filter-name">{"< $50"}</p><Checkbox name="price" filter="< $50" onChange={(e, checked) => handleFilters(e, checked)}/>
                    <br/>
                    <p className="filter-name">{"< $30"}</p><Checkbox name="price" filter="< $30" onChange={(e, checked) => handleFilters(e, checked)}/>
                    <br/>
                    <p className="filter-name">{"< $20"}</p><Checkbox name="price" filter="< $20" onChange={(e, checked) => handleFilters(e, checked)}/>
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Filter)
