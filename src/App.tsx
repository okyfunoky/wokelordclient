import React from 'react';
import logo from './logo.svg';
import Tower from './components/Tower/tower'
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Tower name="newTower"/>
    </div>
  );
}

export default App;
