import * as React from 'react';

interface NewRoomProps {
    onClick(): any
}


const NewRoomButton: React.FC<NewRoomProps> = (props) => {
    return (
        <button onClick={props.onClick}>Add new Room</button>
    )
}

export default NewRoomButton;