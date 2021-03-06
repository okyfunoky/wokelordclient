import React, { Component, useContext } from "react";
import Floor from '../Floor/floor';
import newFloorButton from '../NewFloorButton/NewFloorButton'
import './style.css';
import NewFloorButton from "../NewFloorButton/NewFloorButton";
import Elevator from "../Elevator/elevator"
import { getFloorRooms } from "../../util/api";
const api = require('../../util/api');

export interface TowerProps {
    name: string,
    updateGameState: any,
    availableRoomTypes: Set<string>
}

export default class Tower extends React.Component<TowerProps> {
    state = {
        floors: Array<any>(),
        name: this.props.name,
        money: 0,
        floorsAdded: false,
    }

    async componentDidMount() {
        //callDB
        let res = await api.getTower(this.state.name);

        let newFloors = Array<any>();

        if (res.data[0].floors) {
            console.log(res.data[0].floors);
            res.data[0].floors.forEach((floor: any) => {
                newFloors.push(floor);
            });
        }
        console.log(newFloors);

        newFloors = newFloors.sort((a,b)=>{
            return a.number - b.number;
        })
        console.log(newFloors);

        this.setState({ floors: newFloors })
    }

    addFloor = async () => {
        
        if(this.state.floors.length < 20){
            console.log(this.state.floors.length)
        let topFloor: any = this.state.floors[this.state.floors.length - 1];
        console.log(topFloor)
        let newFloor;
        if (topFloor) {
            newFloor = topFloor.number + 1;
        } else {
            newFloor = 0;
        }

        let newFloors = Array<number>();
        let towerJson = await api.buildFloor(this.state.name, newFloor);
        console.log("Tower Json...")
        console.log(towerJson);

        let newlyBuiltFloor = towerJson.data.floors[towerJson.data.floors.length-1];
        console.log(newlyBuiltFloor)
        this.state.floors.forEach((floor) => {
            newFloors.push(floor);
        })

        newFloors.push(newlyBuiltFloor);
        this.handleUpdateGameState();
        this.setState({ floors: newFloors });
        }else{
            alert("You can't build any higher because you'd block some NIMBY's view... or rather you'd 'Change the character of the neighborhood'. Game over.");
        }
    }

    handleAddFloor = () => {
        console.log(this)
        this.addFloor();
    }

    handleUpdateGameState(){
        this.props.updateGameState();
    }

    render() {
        return (
            <div className="outerTower">
                <NewFloorButton onClick={this.addFloor}></NewFloorButton>
                <div className="innerTower">
                    <Elevator towerHeight={this.state.floors.length} position="left" clickHandler={() => { }}></Elevator>
                    <div className="floors">
                        {this.state.floors.map((floor) => {
                            return <Floor key={floor.number} availableRoomTypes={this.props.availableRoomTypes} number={floor.number} _id={floor._id} towerName={this.state.name} updateGameState={this.props.updateGameState}></Floor>
                        })}
                    </div>
                    <Elevator towerHeight={this.state.floors.length} position="right" clickHandler={() => { }}></Elevator>
                </div>
             </div>
        )
    }
}