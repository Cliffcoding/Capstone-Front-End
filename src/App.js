import React, { Component } from 'react';
import isElectron from 'is-electron';
import './App.css';
import KioskView from './Components/KioskView';
import WebPage from './Components/WebPage';


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        {isElectron() ? <KioskView/> : <WebPage />}
      </div>
    );
  }
}

export default App;
