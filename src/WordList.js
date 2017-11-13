import React from 'react'

const WordList = ({ words }) => {

  const showWord = () => {
    return words.map((word, idx) => {
      return <li key={idx} className="list-items">{word}</li>
    })
  }

  return (
    <div className="word-list-container">
      <div className="word-list-grid" >
        <header className="word-list-title">Your words</header>
        <div >
          <ul className="word-list">{showWord()}</ul>
        </div>
      </div>
    </div>
  )
}

export default WordList
