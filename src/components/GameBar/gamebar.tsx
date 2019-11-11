import * as React from 'react';
import './style.css';
import Stars from '../Stars/stars'
import GameBarItem from './gamebaritem'
import { tsImportEqualsDeclaration } from '@babel/types';
import { useSpring } from 'react-spring';

export interface GamebarProps {
    gameState: {
        money: number,
        population: number,
        happiness: number,
        starLevel: number,
    },
    endMonthHandler: any
}

export default class GameBar extends React.Component<GamebarProps, {}> {
    state = {
        money: 0
    }

    render() {
        return (
            <div className="gamebar">
                <div className="money gamebarItem">
                    <span>Funds: </span>
                    <GameBarItem ending={this.props.gameState.money} starting={0} ></GameBarItem>
                </div>
                <div className="gamebarItem">
                    <span>Star Level: <Stars stars={this.props.gameState.starLevel}></Stars></span>
                </div>
                <div className="gamebarItem">
                    <span>Population: </span>
                    <GameBarItem ending={this.props.gameState.population} starting={0} ></GameBarItem>
                </div>
                <button className="nextmonthbutton" onClick={this.props.endMonthHandler}>Collect Rent $$$</button>
            </div>
        )
    }
}