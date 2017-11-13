import React from 'react'


const Timer = ({ timer }) => {

  const minute = () => {
    return Math.floor(timer / 60)
  }

  const second = () => {
    let s = timer % 60;
    return (s<10) ? `0${s}` : s
  }

  return(
    <div className="boggle-timer">
      Time Left: {minute()}: {second()}
    </div>
  )

}

export default Timer;
