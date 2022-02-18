import React from 'react';
import './App.css';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <SolarSystem />
      </main>
    );
  }
}

export default App;
