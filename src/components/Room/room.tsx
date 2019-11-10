import * as React from 'react';
import './style.css';
import Menu from '@material-ui/core/Menu';
import RoomContextmenu from '../RoomContextMenu/roomcontextmenu'

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

const Room: React.FC<RoomProps> = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event: any) {
        setAnchorEl(event.currentTarget);
    };

    function handleClose() {
        setAnchorEl(null);
    };

    
    return (
        <div className={props.type} onClick={handleClick}>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <div className="roomcontextmenu">
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </Menu>
        </div>
    )
}

export default Room;