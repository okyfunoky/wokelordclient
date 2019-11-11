import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import './style.css'

export interface ElevatorCarProps {
    towerHeight: number,
}

const ElevatorCar: React.FC<ElevatorCarProps> = (props) => {
    let towerSize = (props.towerHeight * 7) -6;
    let elevatorMaxHeight = towerSize.toString() + "em";
    let eleveatorDuration = props.towerHeight*1000;
    // const Script: any = Keyframes.Spring(async (next: any) => {
    //     while (true)

    //         await next(
    //             { bottom: 0, from: { bottom: elevatorMaxHeight }, reset: true }
    //         )
    // })

    const [on, toggle] = useState(false);
    
    const animation = useSpring({ config: { duration: eleveatorDuration },
         bottom: on ? elevatorMaxHeight : "1em"
    })

    return (

        <div>
            <animated.div onClick={() => toggle(!on)} className="elevatorCar" style={animation}></animated.div>
        </div>
    )
}

export default ElevatorCar;