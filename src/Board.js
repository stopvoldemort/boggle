import React from 'react'

const Board = ({ letters }) => {

  const letterDivs = letters.split("").map((letter, idx) => {
    return <div className="letter" key={idx}>{letter}</div>
  })

  return (
    <div className="container">
      <div className="board col-sm-8">
        {letterDivs}
      </div>
    </div>
  )

}

export default Board
