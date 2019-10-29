import * as React from 'react';
import Room from '../Room/room';
import './style.css';

export interface FloorProps {
    number: number;
    rooms: string[];
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class Tower extends React.Component<FloorProps, {}> {
    state = {
        number: this.props.number,
        rooms: this.props.rooms
    }

    render() {
        let fillerTenants = ["Bill","Joe","Mary"]

        return (
            <div className="floor">
            <h5>Floor {this.state.number} has {this.state.rooms.length}</h5>
            {this.state.rooms.map((room)=>{
                return <Room name={room} tenants={fillerTenants}></Room>
            })}
            </div>
        )
    }
}