import React, { Component } from "react";
import Floor from '../Floor/floor';
import './style.css';
const api = require('../../util/api');

export interface TowerProps { 

 }

export default class Tower extends React.Component<TowerProps> {
    state = {
        floors: [1,2],
        name: "newTower",
        money: 0,
    }
    
    addRoom(){
        let topFloor = this.state.floors[this.state.floors.length];
        let newFloor = topFloor+1;
        api.buildFloor();
        
    }

    render() {
        this.addRoom();
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