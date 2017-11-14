import React from 'react'


const GameEndPopUp = ({ score, submitScore }) => {

  return(
    <div className="end-game-div">
      <h2>GAME OVER</h2>
      <form onSubmit={submitScore} className="end-game-form">
        <p>{`Your score is: ${score}`}</p>
        <input type="text" placeholder="Enter Your Name" />
        <button type="submit">Save</button>
      </form>
    </div>
  )

}

export default GameEndPopUp;
