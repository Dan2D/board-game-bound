import React, {useState} from 'react'

function Checkbox(props) {
    const [toggleCheckbox, setToggleCheckbox] = useState(false);

    function handleCheckboxChange(e){
        console.log(e.target)
        setToggleCheckbox(!toggleCheckbox);
        return props.onChange(e, !toggleCheckbox);
    }

    return (
    <input 
    type="checkbox" 
    data-name={props.name}
    data-filter={props.filter}
    value={toggleCheckbox}
    onChange={(e) => handleCheckboxChange(e)}
    />
    )
}

export default Checkbox
