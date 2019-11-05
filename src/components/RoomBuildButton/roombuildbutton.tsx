import React from 'react';
import './style.css';

interface RoomBuildButtonProps {
  clickHandler: any
  roomType: string,
  roomName: string,
}

const RoomBuildButton: React.FC<RoomBuildButtonProps> = (props) => {
  return (
    <button onClick={()=> props.clickHandler(props.roomName, props.roomType)}>{props.roomType}</button>
  );
}

export default RoomBuildButton;
