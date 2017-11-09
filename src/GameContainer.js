import React, {Component} from 'react'
import Hud from './Hud.js'
import WordForm from './WordForm.js'

class GameContainer extends Component {

  state = {
    words: []
  }


  addWord = (word) => {
    const newWordArray = this.state.words.concat(word)
    this.setState({
      words: newWordArray
    })
  }

  render() {
    return(
      <div>
        <Hud letters={this.props.letters} />
        <WordForm addWord={this.addWord}/>
      </div>
    )
  }
}

export default GameContainer
