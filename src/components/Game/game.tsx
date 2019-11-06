import * as React from 'react';
import './style.css';
import GameBar from '../GameBar/gamebar';
import Tower from '../Tower/tower';
const api = require('../../util/api');

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

    updateGameState = async () => {
        let pop = await api.getPopulation(this.state.towerName);
        console.log(pop.data);
        this.setState({ population: pop.data })
    }

    componentDidMount() {
        //get game state from DB/API
        this.updateGameState();
    }

    render() {
        return (
            <div className="game">
                <GameBar gameState={this.state}></GameBar>
                <Tower name={this.state.towerName} updateGameState={this.updateGameState} />
            </div>
        )
    }
}