import React, { Component } from 'react';
import './style/App.css';
import GameContainer from './GameContainer'
import { Route } from 'react-router-dom'
import Rules from './Rules.js'
import Home from './Home.js'
import HighScore from './HighScore.js'
import Navbar from './Navbar.js'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <br /><br />
        <Route exact path='/' component={Home}/>
        <Route exact path='/newgame' component={GameContainer}  />
        <Route exact path='/highscores' component={HighScore}  />
        <Route exact path='/rules' component={Rules} />
      </div>
    );
  }
}

export default App;
