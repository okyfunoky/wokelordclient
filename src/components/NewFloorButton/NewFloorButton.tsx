import * as React from 'react';
import './style.css'

interface NewFloorProps {
    onClick(): any
}

const NewFloorButton: React.FC<NewFloorProps> = (props) => {

    return (

        <button className="newFloorButton" onClick={props.onClick}>
            <span className="tooltiptext">Click to build a new floor for $100,000</span>
        </button>
    )
}

export default NewFloorButton;