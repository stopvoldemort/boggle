import React from 'react'

export default class WordForm extends React.Component {

  state = {
    input: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addWord(this.state.input)
    this.setState({
      input: ''
    })
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  render = () => {
    return(
      <div className="input-form-wrapper container">
        <div className="col-sm-8">
          <form className='input-form' onSubmit={this.handleSubmit}>
            <input type='text' onChange={this.handleChange} value={this.state.input}/>
            <button type='submit'>Enter</button>
          </form>
        </div>
      </div>
    )
  }
}
