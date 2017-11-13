import React from 'react'
import Timer from './Timer'
import Score from './Score'
import WordForm from './WordForm'

const Footer = (props) => {

  return(
    <div className="footer-container">
      <Timer timer={props.timer}/>
      <WordForm handleWord={props.handleWord} letters={props.letters} />
      <Score words={props.words}/>
    </div>
  )
}

export default Footer;
