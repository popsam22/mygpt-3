import React from 'react'
import './possibility.css'
import possibility from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibility} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h3>Request Early Access to Get Started</h3>
        <h1>The possibilities are beyond your imagination</h1>
        <p> AI makes diversity simple and it's amazing to know we're yet to explore it's full potentials. This is the future and the future is now, let all hands be on deck to make this a success.</p>
        <h3>Request Early Access to Get Started</h3>
      </div>
    </div>
  )
}

export default Possibility