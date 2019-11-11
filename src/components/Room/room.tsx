import * as React from 'react';
import './style.css';
import Menu from '@material-ui/core/Menu';
import RoomContextmenu from '../RoomContextMenu/roomcontextmenu'
import { useSpring, animated } from 'react-spring';

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

    const animation = useSpring({
        config: { duration: 2000 },
        opacity: 1, from: {opacity: 0}
    })


    return (
        // <div className={props.type}></div>
        <animated.div className={props.type} style={animation}>
            {/* <div className={props.type}></div> */}
        </animated.div>
    )
}

export default Room;