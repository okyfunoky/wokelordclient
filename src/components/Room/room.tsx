import * as React from 'react';
import './style.css';

export interface RoomProps { 
    name: string,
    tenants: any[],
    floorId: string,
 }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class Room extends React.Component<RoomProps, {}> {
    state = {
        name: this.props.name,
        tenants: this.props.tenants,
    }
    
    render() {
        return <div className="room">{this.state.name} has {this.state.tenants.length} tenants</div>;
    }
}
