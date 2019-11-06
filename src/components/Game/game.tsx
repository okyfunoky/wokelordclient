import * as React from 'react';
import './style.css';
import GameBar from '../GameBar/gamebar';
import Tower from '../Tower/tower';

interface GameProps {
    towerName: string,
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class Game extends React.Component<GameProps, {}> {
    state = {
        money: 100000,
        towerName: this.props.towerName,
        starLevel: 1,
        happiness: 50,
        population: 0,
    }

    updateGameState = () => {

    }

    componentDidMount() {
        //get game state from DB/API
    }

    render() {
        return (
            <div>
                <GameBar gameState={this.state}></GameBar>
                <Tower name={this.state.towerName} updateGameState={this.updateGameState}/>
            </div>
        )
    }
}