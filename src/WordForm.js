import React from 'react'

export default class WordForm extends React.Component {

  state = {
    input: '',
    errorMessage: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleWord(this.state.input)
    this.setState({input: ''})
  }

  handleChange = (event) => {
    if (event.nativeEvent.inputType === "deleteContentBackward") {
      this.setState({input: this.state.input.slice(0, -1)})
    } else {
      const currentLetter = event.nativeEvent.data
      const word = event.target.value
      if (!this.state.input.length) {
        this.checkIfFirstLetterIsOnBoard(currentLetter)
      } else if (this.checkIfCurrentLetterIsAdjacentToLast(currentLetter)) {
        this.setState({input: word, errorMessage: ""})
      } else {
        this.setState({
          errorMessage: "That is not a valid letter!"
        })
      }
    }
  }

  checkIfFirstLetterIsOnBoard = (letter) => {
    if (!this.props.letters.includes(letter)) {
      this.setState({errorMessage: "The letter isn't there!"})
    } else {
      this.setState({input: letter, errorMessage: ""})
    }
  }

  checkIfCurrentLetterIsAdjacentToLast = (currentLetter) => {
    const lastLetter = this.state.input.slice(-1)
    const arrayOfPossibleLastLetterObjects = this.getLetterArraysByString(lastLetter)
    for (let i = 0; i < arrayOfPossibleLastLetterObjects.length; i++) {
      let lastLetterObj = arrayOfPossibleLastLetterObjects[i]
      if (this.checkIfLetterIsAdjacentToAnotherLetter(currentLetter, lastLetterObj)) {
        return true
      }
    }
    return false
  }

  checkIfLetterIsAdjacentToAnotherLetter = (currentLetter, comparisonLetterObj) => {
    const surroundingLetterObjects = this.getSurroundingLetterObjects(comparisonLetterObj)
    const surroundingLetters = surroundingLetterObjects.map(l => (l ? l.letter : ""))
    return (surroundingLetters.includes(currentLetter)) ? true : false
  }

  getSurroundingLetterObjects = (letterObj) => {
    const x = letterObj.x
    const y = letterObj.y
    let arr = []
    arr.push(this.getLetterByCoordinates(x-1, y-1))
    arr.push(this.getLetterByCoordinates(x-1, y))
    arr.push(this.getLetterByCoordinates(x-1, y+1))
    arr.push(this.getLetterByCoordinates(x, y-1))
    arr.push(this.getLetterByCoordinates(x, y+1))
    arr.push(this.getLetterByCoordinates(x+1, y-1))
    arr.push(this.getLetterByCoordinates(x+1, y))
    arr.push(this.getLetterByCoordinates(x+1, y+1))
    return arr;
  }

  getLetterByCoordinates = (x,y) => {
    return this.letterObjects().find((obj) => (obj.x === x && obj.y === y))
  }

  getLetterArraysByString = (letter) => {
    return this.letterObjects().filter((obj) => {
      return obj.letter === letter
    })
  }

  letterObjects = () => {
    return this.props.letters.split("").map((letter, idx) => {
      const obj = {}
      obj.letter = letter
      obj.x = (idx%4)
      obj.y = (Math.floor(idx/4))
      return obj;
    })
  }



  render = () => {
    return(
      <div className="input-form container">
        <form onSubmit={this.handleSubmit} >
          <input id="poop" type='text' onChange={this.handleChange} value={this.state.input} disabled={!this.props.isGameStarted} />
          <button type='submit' className="btn btn-sm enter-button" disabled={!this.props.isGameStarted} >Enter</button>
        </form>
        {this.state.errorMessage ? <p className="alert alert-danger error-message">{this.state.errorMessage}</p> : "" }
      </div>
    )
  }
}
