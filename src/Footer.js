import React from 'react'
import Timer from './Timer'
import Score from './Score'
import WordForm from './WordForm'

const Footer = (props) => {

  return(
    <div className="footer-container">
      <WordForm handleWord={props.handleWord} letters={props.letters} isGameStarted={props.isGameStarted}/>
      <Score score={props.score}/>
    </div>
  )
}

export default Footer;
