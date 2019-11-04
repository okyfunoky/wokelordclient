import * as React from 'react';
import Room from '../Room/room';
import NewRoomButton from "../NewRoomButton/NewRoomButton";
import './style.css';
const api = require('../../util/api');

export interface FloorProps {
    number: number;
    _id: string,
    towerName: string,
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class Floor extends React.Component<FloorProps, {}> {
    state = {
        number: this.props.number,
        rooms: Array<any>(),
        _id: this.props._id,
    }

    componentDidMount = async() =>{
        let floor = await api.getFloorRooms(this.state._id);
        console.log("Rooms Obj");
        console.log(floor);
        this.setState({rooms: floor.data[0].rooms});
    }

    addRoom = async () => {
        let newFloor = await api.buildRoomOnFloor(this.props.towerName, this.state._id,"newRoom","newRoomType");
        console.log(newFloor);
        let newRoom = newFloor.data.rooms[0];
        console.log("New room....");
        
        console.log(newRoom);
    
        let newRooms = this.state.rooms.map((room)=>{
            return room;
        })

        console.log(newRooms);
        newRooms.push(newRoom.name);

        this.setState({ rooms: newRooms });

        console.log(newFloor.data.rooms[0]);
    }

    render() {
        let fillerTenants = ["Bill", "Joe", "Mary"]
        
        return (
            <div className="floor">
                <NewRoomButton onClick={this.addRoom}></NewRoomButton>
                {this.state.rooms.map((room) => {
                    return <Room name={room.name} tenants={fillerTenants} floorId={this.state._id}></Room>
                })}
            </div>
        )
    }
}