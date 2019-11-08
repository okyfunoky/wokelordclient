import React from 'react';
import RoomBuildButton from '../RoomBuildButton/roombuildbutton'
import './style.css';

interface RoomBuildMenuProps {
    clickHandler: any,
    roomTypeList: Set<string>
}

const RoomBuildMenu: React.FC<RoomBuildMenuProps> = (props) => {

return (
    <div className="RoomBuildMenu">
        {Array.from(props.roomTypeList).map((roomType)=>{
            return <RoomBuildButton clickHandler={props.clickHandler} roomType={roomType} roomName="Foo">{roomType}</RoomBuildButton>
        })}
{/* 
        <RoomBuildButton clickHandler={props.clickHandler} roomType={"office"} roomName="Foo"></RoomBuildButton>
        <RoomBuildButton clickHandler={props.clickHandler} roomType={"apartment"} roomName="Foo"></RoomBuildButton>
        <RoomBuildButton clickHandler={props.clickHandler} roomType={"entertainment"} roomName="Foo"></RoomBuildButton>
        <RoomBuildButton clickHandler={props.clickHandler} roomType={"restaurant"} roomName="Foo"></RoomBuildButton>
        <RoomBuildButton clickHandler={props.clickHandler} roomType={"condo"} roomName="Foo"></RoomBuildButton> */}
    </div>
  );
}

export default RoomBuildMenu;
