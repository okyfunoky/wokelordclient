import * as React from 'react';
import Room from '../Room/room';
import NewRoomButton from "../NewRoomButton/NewRoomButton";
import './style.css';
import { Modal, Dialog, DialogTitle, DialogContent, MenuItem, Menu } from '@material-ui/core';
import { throwStatement } from '@babel/types';
const api = require('../../util/api');

export interface FloorProps {
    number: number;
    _id: string,
    towerName: string,
    updateGameState: any
}

// State is never set so we use the '{}' type.
export default class Floor extends React.Component<FloorProps, {}> {
    state = {
        number: this.props.number,
        rooms: Array<any>(),
        _id: this.props._id,
        showMenu: false,
    }

    toggleMenu = () => {
        if (this.state.showMenu) {
            this.setState({ showMenu: false })
        } else {
            this.setState({ showMenu: true })
        }
    }

    componentDidMount = async () => {
        let floor = await api.getFloorRooms(this.state._id);
        console.log("Rooms Obj");
        console.log(floor);
        this.setState({ rooms: floor.data[0].rooms });
    }

    addRoom = async (newRoomName: string, newRoomType: string) => {
        let newRoomRent = 0;
        let newRoomMaintenance = 0;
        let newRoomHappiness = 0;
        let newFloor = await api.buildRoomOnFloor(this.props.towerName, this.state._id, newRoomName, newRoomType, newRoomRent, newRoomMaintenance, newRoomHappiness);
        console.log(newFloor);
        let floor = await api.getFloorRooms(this.state._id);
        console.log("New Floor Obj");
        console.log(floor);
        this.setState({ rooms: floor.data[0].rooms });
        this.props.updateGameState();
    }

    render() {
        return (
            <div className="floor">
                <div className="rooms">
                {this.state.rooms.map((room) => {
                    return (
                        <Room
                            name={room.name}
                            type={room.type}
                            tenants={room.tenants}
                            floorId={this.state._id}
                            _id={room._id}
                            happiness={room.happiness}
                            rent={room.rent}
                            maintenance={room.maintenance}
                        />
                    )
                })}
                </div>
                <NewRoomButton clickHandler={this.addRoom}></NewRoomButton>

            </div>
        )
    }
}