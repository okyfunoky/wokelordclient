import React from 'react';
import './style.css';

interface RoomBuildMenuProps {
    RoomInfo: {
        name: string,
        tenants: any[],
        floorId: string,
        type: string,
        _id: string,
        rent: number,
        maintenance: number,
        happiness: number,
    }
}

const RoomContextMenu: React.FC<RoomBuildMenuProps> = (props) => {

return (
    <div className="roomcontextmenu">
        <p>Foo</p>
        <p>Bar</p>
        <p>Baz</p>
        <p></p>
        <p></p>
        <p></p>
    </div>
  );
}

export default RoomContextMenu;
