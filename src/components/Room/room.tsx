import * as React from 'react';

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
        return <h1>Room {this.state.name} has {this.state.tenants.length} tenants</h1>;
    }
}
