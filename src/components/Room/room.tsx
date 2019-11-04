import * as React from 'react';
import './style.css';

export interface RoomProps { 
    name: string,
    tenants: any[],
    floorId: string,
    type: string,
    _id: string,
    rent: number,
    maintenance: number,
    happiness: number,
 }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class Room extends React.Component<RoomProps, {}> {
    state = {
        name: this.props.name,
        tenants: this.props.tenants,
        type: this.props.type,
        rent: this.props.rent,
        maintenance: this.props.maintenance,
        happiness: this.props.happiness

    }
    
    render() {
        return <div className="room">{this.state.name} is a {this.state.type} and has {this.state.tenants.length} tenants. ID is {this.props._id}</div>;
    }
}
