import React from 'react'


const Timer = ({ timer }) => {

  const minute = () => {
    return Math.floor(timer / 60)
  }

  const second = () => {
    return (timer % 60)
  }

  return(
    <div className="boggle-timer">
      Time Left: {minute()}: {second()}
    </div>
  )

}

export default Timer;
