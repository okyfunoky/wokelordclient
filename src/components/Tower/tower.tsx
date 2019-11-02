import React, { Component } from "react";
import Floor from '../Floor/floor';
import newFloorButton from '../NewFloorButton/NewFloorButton'
import './style.css';
import NewFloorButton from "../NewFloorButton/NewFloorButton";
const api = require('../../util/api');

export interface TowerProps { 
    name: string
 }

export default class Tower extends React.Component<TowerProps> {
    state = {
        floors: [],
        name: this.props.name,
        money: 0,
        floorsAdded: false,
    }
    
    async componentDidMount(){
        //callDB
        let res = await api.getTower(this.state.name);
        console.log(res.data[0].floors);
        let newFloors = Array<Number>();

        res.data[0].floors.forEach((floor: { number: any; }) => {
            newFloors.push(floor.number);
        });

        this.setState({floors: newFloors})
    }

    addFloor = async() => {
            console.log(this.state.floors.length)
            let topFloor: number = this.state.floors[this.state.floors.length];
            console.log(topFloor)
            let newFloor: number = topFloor+1;
            let newFloors = Array<number>();
            let newFloorJson = await api.buildFloor(this.state.name, newFloor);
            console.log(newFloorJson);
    
            this.state.floors.forEach((floor)=>{
                newFloors.push(floor);
            })
    
            newFloors.push(newFloor);
            this.setState({floorsAdded: true});
            this.setState({floors: newFloors});
    }

    handleAddFloor = () =>{
        console.log(this)
        this.addFloor();
    }

    render() {
        let testRooms = ["Office", "Appartment","Restaurant","Gym"]
        return (
            <div className="tower">
                <NewFloorButton onClick={this.handleAddFloor}></NewFloorButton>
                {this.state.floors.reverse().map((floor)=>{
                    return <Floor number={floor} rooms={testRooms}></Floor>
                })}
            </div>
        )
    }
}