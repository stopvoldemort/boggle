import React from 'react'

export default class WordForm extends React.Component {

  state = {
    input: '',
    showError: false
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addWord(this.state.input)
    this.setState({
      input: ''
    })
  }

  handleChange = (event) => {
    const letter = event.target.value
    if(!this.checkIfLetterIsOnBoard(letter)){
      this.setState({
        showError: "The letter isnt there!"
      })
      return null;
    }
    this.setState({
      input: letter,
      showError: false
    })
  }

  checkIfLetterIsOnBoard = (letter) => {
    console.log("includes", this.props.letters.includes(letter))
    this.props.letters.includes(letter)
  }



  render = () => {
    return(
      <div className="input-form-wrapper container">
        <div className="col-sm-8">
          <form className='input-form' onSubmit={this.handleSubmit}>
            <input type='text' onChange={this.handleChange} value={this.state.input}/>
            <button type='submit'>Enter</button>
          </form>
          <p>{this.state.showError}</p>
        </div>
      </div>
    )
  }
}
