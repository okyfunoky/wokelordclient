import * as React from 'react';

interface NewFloorProps {
    onClick(): any
}


const NewFloorButton: React.FC<NewFloorProps> = (props) => {
    return (
        <button onClick={props.onClick}>Add new floor</button>
    )
}

export default NewFloorButton;