import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {


  return (
    <div>
      <div className="title-container">
        <div className="neon">CLICK THE PICTURE </div>
        <div className="flux">TO PLAY </div>
      </div>
      <div>
        <Link to="/newgame" >
          <img className="home-image" src={require('./boggle-gif.gif')} alt="boggle-gif"/>
        </Link>
      </div>
    </div>
  )

}

export default Home;
