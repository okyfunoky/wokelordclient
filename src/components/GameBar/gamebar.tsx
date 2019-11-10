import * as React from 'react';
import './style.css';
import Stars from '../Stars/stars'
import { tsImportEqualsDeclaration } from '@babel/types';

export interface GamebarProps {
    gameState: {
        money: number,
        population: number,
        happiness: number,
        starLevel: number,
    },
    endMonthHandler: any
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
                    <span>Star Level: <Stars stars={this.props.gameState.starLevel}></Stars></span>
                </div>
                <div className="gamebarItem">
                    <span>Population: </span>
                    {this.props.gameState.population}
                </div>
                <button className="nextmonthbutton" onClick={this.props.endMonthHandler}>Collect Rent $$$</button>
            </div>
        )
    }
}