import React from 'react'
import Letter from './Letter'

const Board = ({ letters }) => {

  const letterDivs = letters.split("").map((letter, idx) => {
    return <Letter letter={letter} key={idx} x={idx%4} y={Math.floor(idx/4)}/>
  })



  return (
    <div className="board-container">
      <div className="board">
        {letterDivs}
      </div>
    </div>
  )

}

export default Board
