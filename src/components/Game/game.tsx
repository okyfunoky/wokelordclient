import * as React from 'react';
import './style.css';
import GameBar from '../GameBar/gamebar';
import Tower from '../Tower/tower';
import { start } from 'repl';
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
        availableRoomTypes: new Set<string>(),
    }

    updateGameState = async () => {
        let pop = await api.getPopulation(this.state.towerName);
        let money = await api.getMoney(this.state.towerName);
        console.log(pop.data);
        let newStarLevel = this.getStarLevel(pop.data);
        let roomsAvailable = this.getAvailableRooms(newStarLevel);
        this.setState({ population: pop.data, money: money.data, starLevel: newStarLevel, availableRoomTypes: roomsAvailable})
    }

    getAvailableRooms(starLevel: number){
        let availableRoomTypes = new Set<string>();

        availableRoomTypes.add("apartment");
        availableRoomTypes.add("office");

        if(starLevel > 1){
            availableRoomTypes.add("condo");
            availableRoomTypes.add("restaurant");
        }
        if(starLevel > 2){
            availableRoomTypes.add("hotel");
            availableRoomTypes.add("cleaning");
        }
        if(starLevel > 3){
            availableRoomTypes.add("test");
        }
        if(starLevel > 4){
           // availableRoomTypes.push("condo","restaurant");
        }

        return availableRoomTypes;
    }

    getStarLevel(population: number){
        let starLevel = 1;
        if(population > 200){
            
            starLevel = 2;
        }

        if(population > 500){
            starLevel = 3;
        }
        if(population > 1000){
            starLevel = 4;
        }
        if(population > 2000){
            starLevel = 5;
        }

        return starLevel;

    }

    componentDidMount() {
        //get game state from DB/API
        this.updateGameState();
    }

    endMonth = async () => {
        let newMoney = await api.endMonth(this.state.towerName);
        let newState = await this.updateGameState();
    }

    render() {
        return (
            <div className="game">
                <GameBar gameState={this.state} endMonthHandler={this.endMonth}></GameBar>
                <Tower availableRoomTypes={this.state.availableRoomTypes} name={this.state.towerName} updateGameState={this.updateGameState} />
            </div>
        )
    }
}