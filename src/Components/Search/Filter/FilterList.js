import React from 'react'
import Checkbox from "../../Parts/Checkbox";
import {filterTypes} from "./filterTypes";

function FilterList(props) {

   let filterArr = Object.keys(filterTypes[props.filter]).map(filter => {
       if (filter === "time"){

       }
       let filterObj = filterTypes[props.filter][filter];
       return (
            <Checkbox key={filter} name={props.filter} filter={filterObj.name} filterName={filter} onChange={(e, checked) => props.onChange(e, checked)}/>
     )
    
   });

    return (
        <div className="filter-list-container">
            <p><strong>{props.title}</strong></p>
            <div className="filter-list">
                {filterArr}
            </div>
        </div>
    )
}

export default FilterList
