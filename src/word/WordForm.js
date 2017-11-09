import React from 'react'

export default class WordForm extends React.Component {

  state = {
    input: ''
  }

  handleSubmit = (event) => {
    console.log("submit", this.state.input)
    event.preventDefault()
    this.props.addWord(this.state.input)
    this.setState({
      input: ''
    })
  }

  handleChange = (event) => {
    console.log("change", event.target.value)
    this.setState({
      input: event.target.value
    })
  }

  render = () => {
    console.log(this.props)
    return(
      <div className="input-form-wrapper">
        <form className='input-form' onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange} value={this.state.input}/>
          <button type='submit'>Enter</button>
        </form>
      </div>
    )
  }
}
