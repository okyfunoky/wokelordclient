import React, { useState, useEffect } from 'react';
import './App.css';
import Game from './components/Game/game';
import TowerList from '../src/components/TowerList/towerlist'
const api = require('../src/util/api');

const App: React.FC = () => {
  const [towerLoaded, setTower] = useState(false);
  const [selectedTower, setSelectedTower] = useState();

  const handleSelectTower = (selection: any)=>{
    console.log("selection:")
    console.log(selection);
    setSelectedTower(selection);
    setTower(true);
  }

  if (towerLoaded) {
    return (
      <div className="App">
        <Game towerName={selectedTower}>
        </Game>
      </div>
    )
  }
  return (
    <div className="App">
      <TowerList selectTower={handleSelectTower}></TowerList>
  </div>
  )
}

export default App;
