import React, {Component} from 'react'
import WordList from './WordList.js'
import Footer from './Footer.js'
import Board from './Board.js'


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
    this.boggleTimer()
    this.fetchLetters()
      .then(json => this.setState({
        letters: json.setup
      }))
  }

  boggleTimer = () => {
    let currentTimer = setInterval(() => {
      if (this.state.timer > 0) {
        this.setState({timer: this.state.timer - 1})
      } else {
        console.log("times up!")
        clearInterval(currentTimer)
      }
    }, 1000)
  }

  handleWord = (word) => {
    if (!this.checkWordLength(word)) return false
    if (!this.checkDuplicateWord(word)) return false
    this.addWord(word)
  }

  checkDuplicateWord = (word) => {
    return (this.state.words.includes(word) ? false : true)
  }

  checkWordLength = (word) => {
    return (word.length >= 3) ? true : false
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
