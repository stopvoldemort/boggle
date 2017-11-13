import React, { Component } from 'react';
import './App.css';
import GameContainer from './GameContainer'
import { Route } from 'react-router-dom'
import Rules from './Rules'
import Home from './Home'


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Welcome to Boggle!</h1>
        <Route exact path='/' component={Home}/>
        <Route exact path='/newgame' component={GameContainer}  />
        <Route exact path='/rules' component={Rules} />
      </div>
    );
  }
}

export default App;
