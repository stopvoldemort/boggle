import React from 'react'

const WordList = ({ words }) => {

  const showWork = () => {
    return words.map((word, idx) => {
      return <li key={idx} className="list-items">{word}</li>
    })
  }

  return (
    <div className="word-list">
      <div className="col-sm-4 offset-sm-8">
        <ul>{showWork()}</ul>
      </div>
    </div>
  )
}


export default WordList
