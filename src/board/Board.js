import React from 'react'

const Board = ({ letters }) => {

  const letterDivs = letters.split("").map((letter, idx) => {
    return <div className="letter" key={idx}>{letter}</div>
  })

  return (
    <div className="board">
      {letterDivs}
    </div>
  )

}

export default Board
