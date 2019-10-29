import * as React from 'react';
import './style.css';

export interface RoomProps { 
    name: string,
    tenants: any[],
 }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class Room extends React.Component<RoomProps, {}> {
    state = {
        name: this.props.name,
        tenants: this.props.tenants,
    }
    
    render() {
        return <h6 className="room">Room {this.state.name} has {this.state.tenants.length} tenants</h6>;
    }
}
