import * as React from 'react';
import './style.css'

interface NewRoomProps {
    onClick(): any
}


const NewRoomButton: React.FC<NewRoomProps> = (props) => {
    return (
        <button className="newRoomButton" onClick={props.onClick}>...</button>
    )
}

export default NewRoomButton;