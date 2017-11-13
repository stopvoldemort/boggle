import React, {Component} from 'react'
import WordList from './WordList.js'
import Footer from './Footer.js'
import Board from './Board.js'
import dictionary from './dictionary.js'


class GameContainer extends Component {

  state = {
    words: [],
    timer: 90,
    letters: ""
  }

  fetchLetters = () => {
    return fetch("http://localhost:3000/rounds/new")
      .then(res => res.json())
  }

  componentDidMount = () => {
    this.createTimerInterval()
    this.fetchLetters()
      .then(json => this.setState({
        letters: json.setup
      }))
  }

  createTimerInterval = () => {
     var intervalId = setInterval(this.timer, 1000);
     this.setState({intervalId: intervalId});
  }

  removeTimerInterval = () => {
    clearInterval(this.state.intervalId);
  }

  componentWillUnmount = () => {
     this.removeTimerInterval()
  }

  timer = () => {
    if (this.state.timer > 0) {
      this.setState({ timer: this.state.timer -1 });
    } else {
      console.log("times up!")
      clearInterval(this.state.intervalId)
    }
  }

  handleWord = (word) => {
    if (!this.checkWordLength(word)) return false
    if (!this.checkDuplicateWord(word)) return false
    if (!this.checkWordExists(word)) return false
    this.addWord(word)
  }

  checkDuplicateWord = (word) => {
    return (this.state.words.includes(word) ? false : true)
  }

  checkWordLength = (word) => {
    return (word.length >= 3) ? true : false
  }

  checkWordExists = (word) => {
    return (dictionary[word] ? true : false)
  }

  addWord = (word) => {
    const newWordArray = [word, ...this.state.words]
    this.setState({words: newWordArray})
  }

  render() {
    return(
      <div className="game-container-grid">
        <Board letters={this.state.letters} />
        <WordList words={this.state.words}/>
        <Footer handleWord={this.handleWord} letters={this.state.letters} words={this.state.words} timer={this.state.timer}/>
      </div>
    )
  }
}

export default GameContainer
