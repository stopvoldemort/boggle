import React, { Component } from 'react';
import './App.css';
import GameContainer from './GameContainer'

class App extends Component {

  state = {
    letters: ""
  }

  fetchLetters = () => {
    return fetch("http://localhost:3000/rounds/new")
      .then(res => res.json())
  }

  componentDidMount = () => {
    this.fetchLetters()
      .then(json => this.setState({
        letters: json.setup
      }))
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to Boggle!</h1>
        <GameContainer letters={this.state.letters}/>
      </div>
    );
  }
}

export default App;
