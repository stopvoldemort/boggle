import React, {Component} from 'react'
import Hud from './Hud.js'
import WordForm from './WordForm.js'

class GameContainer extends Component {

  state = {
    words: []
  }


  addWord = (word) => {
    const newWordArray = [word, ...this.state.words]
    this.setState({
      words: newWordArray
    })
  }

  render() {
    return(
      <div >
        <Hud letters={this.props.letters} words={this.state.words} />
        <WordForm addWord={this.addWord} letters={this.props.letters}/>
      </div>
    )
  }
}

export default GameContainer
