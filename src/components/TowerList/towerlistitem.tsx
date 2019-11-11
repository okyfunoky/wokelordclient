import React, { useState, useEffect } from 'react';
import './style.css';
import { useSpring, animated } from 'react-spring';


export interface TowerListItemProps {
    name: any,
    onClick: any
}


const TowerList: React.FC<TowerListItemProps> = (props) => {
    
function handleHandleButtonClick(){
    console.log("tli getting called")
    props.onClick(props.name);
}
    
    return (
        <div onClick={handleHandleButtonClick}>
            {props.name}
        </div>
    )
}

export default TowerList;
