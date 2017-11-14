import React from 'react'

const Home = () => (

  <div >
    <div className="title-container">
      <div class="neon">CLICK THE PICTURE </div>
      <div class="flux">TO FUCKING PLAY </div>
    </div>
    <div>
      <img className="image" src={require('./boggle-gif.gif')} alt="boggle-gif"/>
    </div>
  </div>

)

export default Home;
