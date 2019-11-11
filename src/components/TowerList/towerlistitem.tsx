import React, { useState, useEffect } from 'react';
import './style.css';
import { useSpring, animated } from 'react-spring';


export interface TowerListItemProps {
    name: any,
    onClick: any
}


const TowerListItem: React.FC<TowerListItemProps> = (props) => {
    
function handleHandleButtonClick(){
    console.log("tli getting called")
    props.onClick(props.name);
}
    
    return (
        <p className="towerListItem" onClick={handleHandleButtonClick}>
            {props.name}
        </p>
    )
}

export default TowerListItem;
