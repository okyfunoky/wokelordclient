import React, { Component } from "react";
import Floor from '../Floor/floor';
import './style.css';

export interface TowerProps { 

 }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class Tower extends React.Component<TowerProps, {}> {
    state = {
        floors: [1,2,3,4,5,6],
    }
    
    render() {
        let testRooms = ["Office", "Appartment","Restaurant","Gym"]
        return (
            
            <div className="tower">
                {this.state.floors.reverse().map((floor)=>{
                    return <Floor number={floor} rooms={testRooms}></Floor>
                })}
            </div>
        )
    }
}