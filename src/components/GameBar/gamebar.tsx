import * as React from 'react';
import './style.css';

export interface GamebarProps {
    text: string
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class Tower extends React.Component<GamebarProps, {}> {
    state = {
        text: this.props.text
    }

    render() {
        return (
            <div className="gamebar">
                <div className="money">

                </div>
                <div className="repuation">

                </div>
                <div className="stars">

                </div>
                <div className="trackedtenants">

                </div>
            </div>
        )
    }
}