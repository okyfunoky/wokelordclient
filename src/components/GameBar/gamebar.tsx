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
                <div className="money gamebarItem">
                    <span>Funds: </span>
                    {this.props.gameState.money}
                </div>
                <div className="happiness gamebarItem">
                    <span>Happiness: </span>
                    {this.props.gameState.happiness}
                </div>
                <div className="gamebarItem">
                    <span>Star Level: </span>
                    {this.props.gameState.starLevel}
                </div>
                <div className="gamebarItem">
                    <span>Population: </span>
                    {this.props.gameState.population}
                </div>
                <button>Proceed to Next Month</button>
            </div>
        )
    }
}