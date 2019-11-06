import * as React from 'react';
import './style.css';

export interface GamebarProps {
    gameState: {
        money: number,
        population: number,
        happiness: number,
        starLevel: number,
    }
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class GameBar extends React.Component<GamebarProps, {}> {
    state = {
        money: 0
    }

    render() {
        return (
            <div className="gamebar">
                <div className="money">
                    {this.props.gameState.money}
                </div>
                <div className="happiness">
                    {this.props.gameState.happiness}
                </div>
                <div className="stars">
                    {this.props.gameState.starLevel}
                </div>
                <div className="population">
                    {this.props.gameState.population}
                </div>
            </div>
        )
    }
}