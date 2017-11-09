import React, {Component} from 'react'
import WordList from './WordList'
import WordForm from './WordForm'


export default class WordContainer extends Component {
  constructor() {
    super()

  this.state = {
    words: []
  }
  }


  addWord = (word) => {
    const newWordArray = this.state.words.push(word)
    this.setState({
      words: newWordArray
    }, () => console.log("this", this.state))
  }

  render() {
    return(
      <div className='word-container'>
        <WordForm addWord={this.addWord}/>

      </div>
    )
  }
}
