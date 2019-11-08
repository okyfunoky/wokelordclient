import React from 'react';
import './style.css';

interface ElevatorProps {
  clickHandler: any
  position: string,
}

const Elevator: React.FC<ElevatorProps> = (props) => {
  
    return (
    <div className={props.position==="left" ? "leftElevator" : "rightElevator"}>
        <div className="elevatorCar">C</div>
    </div>
  );
}

export default Elevator;
