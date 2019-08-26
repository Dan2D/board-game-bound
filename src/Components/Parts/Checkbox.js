import React, {useState} from 'react'

function Checkbox(props) {
    const [toggleCheckbox, setToggleCheckbox] = useState(false);

    function handleCheckboxChange(e){
        setToggleCheckbox(!toggleCheckbox);
        return props.onChange(e, !toggleCheckbox);
    }

    return (
        <div className="checkbox-label">
    <input 
    className="checkbox-input"
    type="checkbox" 
    data-name={props.name}
    data-filter={props.filter}
    value={toggleCheckbox}
    onChange={(e) => handleCheckboxChange(e)}
    />
    <span className="checkbox-custom">{props.filterName}</span>
    </div>
    )
}

export default Checkbox
