import React from 'react'

const StartButton = ({ startGame }) => {

  return(
    <div className="start-button-div">
      <button type="button" onClick={startGame} className="btn btn-lg start-button">Start New Game</button>
    </div>
  )
}

export default StartButton
