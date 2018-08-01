import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';
import MainContentContainer from './MainContentContainer';
import SideNav from './SideNav';



class App extends Component {
  render() {
    return (
        <Router>
          <div className="app">
            <Header/>
            <div className="app-layout">
              <SideNav/>
              <MainContentContainer/>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
