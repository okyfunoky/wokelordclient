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

    function handleInputChange(event:any) {
        setNewTowerName(event.target.value);
      };

    const handleButtonClick = (name: any) =>{
        props.selectTower(name);
    }

    function createTower(){
       let name = newTowerName;
        api.createTower(name).then(()=>{
            props.selectTower(name);
        })
        
    }

    if (towerList) {
        return (
        <div className="towerSelect">
            {towerList.map((name: any) => {
                return <TowerListItem name={name} onClick={handleButtonClick}></TowerListItem>
            })}
            <button className="towerListButton" onClick={handleButtonClick}>Create a New Tower</button>
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
            </div>
        </div>
        )
    }


    return (
        <div className="towerSelect">

        </div>
    )
}

export default TowerList;