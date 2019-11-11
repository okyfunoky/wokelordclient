import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring'
import './style.css'

export interface GameBarItemProps {
    starting: number,
    ending: number,
}

const GameBarItem: React.FC<GameBarItemProps> = (props) => {
    
    const animation = useSpring({config: { precision: .01 },
        number: props.ending, from: { number: props.starting 
    }})

//     const animation = useSpring({ config: { duration: eleveatorDuration },
//         bottom: on ? elevatorMaxHeight : "1em"
//    })
    return (
        <animated.span>{animation.number.interpolate(number => Math.floor(number))}</animated.span>
    )
}

export default GameBarItem;