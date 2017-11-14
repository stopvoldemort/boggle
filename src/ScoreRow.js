import React, {Component} from 'react'


const ScoreRow = ({round}) => {
  return (
    <li className="high-score-list"><strong>{round.username}</strong> scored <strong>{round.score}</strong> points!</li>
  )
}


export default ScoreRow
