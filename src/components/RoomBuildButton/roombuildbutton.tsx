import React from 'react';
import './style.css';

interface RoomBuildButtonProps {
  clickHandler: any
  roomType: string,
  roomName: string,
}

const RoomBuildButton: React.FC<RoomBuildButtonProps> = (props) => {
  const getRoomCost = () =>{
    if(props.roomType==="office"){
      return 5000;
    }

    if(props.roomType==="condo"){
      return 20000;
    }

    if(props.roomType==="apartment"){
      return 8000;
    }

    if(props.roomType==="restaurant"){
      return 20000;
    }

    if(props.roomType==="hotel"){
      return 5000;
    }

    if(props.roomType==="cleaning"){
      return 10000;
    }
  }

  const getRoomTenants = () =>{
    if(props.roomType==="office"){
      return 8;
    }

    if(props.roomType==="condo"){
      return 4;
    }

    if(props.roomType==="apartment"){
      return 3;
    }

    if(props.roomType==="restaurant"){
      return 2;
    }

    if(props.roomType==="hotel"){
      return 1;
    }

    if(props.roomType==="cleaning"){
      return 4;
    }
  }
  
  
  return (
    <button className="newroombutton" onClick={()=> props.clickHandler(props.roomName, props.roomType)}>{props.roomType}
      <span className="tooltiptext">
        <p>Cost: {getRoomCost()}</p>
        <p>Tenants: {getRoomTenants()}</p>
        </span>
      
    </button>
  );
}

export default RoomBuildButton;
