import React, {Component} from 'react'
import ScoreRow from './ScoreRow.js'

// const BASE_URL = "http://localhost:3000/"
const BASE_URL = "https://boggle-backend.herokuapp.com"


class HighScore extends Component {

  state = {
    scores: []
  }

  componentDidMount = () => {
    fetch(BASE_URL + "/rounds/highscores")
      .then(res => res.json())
      .then(highScores => {
        const renderedScores = this.createDivs(highScores)
        this.setState({scores: renderedScores})
      })
  }


  createDivs = (highScores) => {
    return highScores.map((round, idx) => {
      return <ScoreRow key={idx} round={round} />
    })
  }


  render() {
    return (
      <ol className='highscore-ul'>
        {this.state.scores}
      </ol>
    )
  }
}

export default HighScore
