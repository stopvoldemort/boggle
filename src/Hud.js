import React, {Component} from 'react'
import Board from './Board.js'
import WordList from './WordList.js'

class Hud extends Component {

  render() {
    return(
      <div className="hud">
        <Board letters={this.props.letters} />
        <WordList words={this.props.words}/>
      </div>
    )
  }
}

export default Hud
