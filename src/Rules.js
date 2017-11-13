import React from 'react'


const Rules = () => {

  return(
    <div>
      <p>Boggle is a popular word game for any number of players. Boggle is played with a tray of 16 letter dice, which is shaken to get 16 random letters.</p>
      <p>Players have 90 seconds (shown by the countdown timer) to find as many words as they can in the grid, according to the following rules:</p>
      <ul>
        <li>The letters must be adjoining in a 'chain'. (Letter cubes in the chain may be adjacent horizontally, vertically, or diagonally.)</li>
        <li>Words must contain at least three letters.</li>
        <li>No letter cube may be used more than once within a single word.</li>
      </ul>
      <p>Type your words into the box below the grid. You can put each word on a new line or separate the words with spaces or commas. It does not matter whether you use upper or lower case letters.</p>
      <ul>
        <li>3 Letters: 1 point</li>
        <li>4 Letters: 2 point</li>
        <li>5 Letters: 3 points</li>
        <li>6 Letters: 4 points</li>
        <li>7 Letters: 5 points</li>
      </ul>
      <p>If a word appears more than once in the grid, it may not be counted twice. Also, multiple meanings of the same word do not earn multiple credit</p>
      <p>You will not be penalised for submitting the same word twice, but doing so will not increase your score.</p>
    </div>
  )

}

export default Rules;
