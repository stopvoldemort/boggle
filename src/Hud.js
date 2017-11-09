import React, {Component} from 'react'
import Board from './Board.js'
import WordList from './WordList.js'

class Hud extends Component {

  render() {
    return(
      <div>
        <Board letters={this.props.letters} />
        <WordList />
      </div>
    )
  }
}

export default Hud
