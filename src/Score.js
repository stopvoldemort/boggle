import React from 'react'

const Score = ({ words }) => {

  const wordCount = () => {
    return words.reduce((score, currentWord) => {
      return score += (currentWord.length - 2)
    }, 0)
  }

  return(
    <div className="word-score-container">
      Score: {wordCount()}
    </div>
  )

}

export default Score;
