import React from 'react';
import './App.css';
import Game from './components/Game/game';

const App: React.FC = () => {
  return (
    <div className="App">
      <Game towerName="demoeleven">
      </Game>
    </div>
  );
}

export default App;
