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
        floors: Array<any>(),
        name: this.props.name,
        money: 0,
        floorsAdded: false,
    }
    
    async componentDidMount(){
        //callDB
        let res = await api.getTower(this.state.name);
        
        let newFloors = Array<any>();

        if(res.data[0].floors){
            console.log(res.data[0].floors);
            res.data[0].floors.forEach((floor: any) => {
                newFloors.push(floor);
            });
        }
        this.setState({floors: newFloors})
    }

    addFloor = async() => {
            console.log(this.state.floors.length)
            let topFloor: any = this.state.floors[this.state.floors.length-1];
            console.log(topFloor)
            let newFloor;
            if(topFloor){
                newFloor = topFloor.number+1;
            }else{
                newFloor = 0;
            }
            
            let newFloors = Array<number>();
            let towerJson = await api.buildFloor(this.state.name, newFloor);
            console.log("Tower Json...")
            console.log(towerJson);

            let newlyBuiltFloor = towerJson.data.floors[newFloor];
            console.log(newlyBuiltFloor)
            this.state.floors.forEach((floor)=>{
                newFloors.push(floor);
            })
    
            newFloors.push(newlyBuiltFloor);
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
                {this.state.floors.map((floor)=>{
                    return <Floor number={floor.number} _id={floor._id} towerName={this.state.name}></Floor>
                })}
            </div>
        )
    }
}