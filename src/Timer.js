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
      <div id="hour-glass">
        <div id="glass"></div>
        <div id="sand-stream"></div>
        <div id="top-sand"></div>
        <div id="bottom-sand"></div>
      </div>
    </div>
  )

}

export default Timer;
