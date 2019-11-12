import React, { useState, useEffect } from 'react';
import './style.css';
import { useSpring, animated } from 'react-spring';
import TowerListItem from './towerlistitem'
const api = require('../../util/api');

export interface TowerListProps {
    selectTower: any,
}

const TowerList: React.FC<TowerListProps> = (props) => {
    const [towerList, setTowerList] = useState();
    const [newTowerName, setNewTowerName] = useState();
    const [jokeClicked, setJokeClicked] = useState(false);

    useEffect(() => {
        api.loadTowers()
            .then((res: any) => {
                // do what you need to do with res here
                let towerNames = Array<any>();
                res.data.forEach((tower: any) => {
                    towerNames.push(tower.name);
                })
                setTowerList(towerNames);
            });
    });

    function handleInputChange(event: any) {
        setNewTowerName(event.target.value);
    };

    const handleButtonClick = (name: any) => {
        props.selectTower(name);
    }

    function createTower() {
        let name = newTowerName;
        api.createTower(name).then(() => {
            props.selectTower(name);
        })

    }

    if (towerList && jokeClicked) {
        return (
            <div className="towerSelectContainer">
                <div className="towerSelect">
                    <h1 className="title">WOKELORD</h1>
                    <p className="instructions">Click a tower name to load that tower</p>
                    {towerList.map((name: any) => {
                        return <TowerListItem name={name} onClick={handleButtonClick}></TowerListItem>
                    })}
                </div>
                <div>
                    <input
                        className="towerListEntry"
                        value={newTowerName}
                        onChange={handleInputChange}
                        name="newTowerName"
                        type="text"
                        placeholder="Type a new Tower Name here"
                        id="tower"
                    />
                    <div>
                        <button className="towerListButton" onClick={createTower}>Create a New Tower</button>
                    </div>

                </div>
            </div>
        )
    }


    return (
        <div className="towerSelectContainer">
            <h1 className="joke" onClick={()=>{setJokeClicked(true)}}>What's the opposite of a slumlord?</h1>
        </div>
    )
}

export default TowerList;