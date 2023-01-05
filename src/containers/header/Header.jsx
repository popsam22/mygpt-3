import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
          <h1 className='gradient__text'>
            Let's Solve Puzzles Together With GPT-3 OpenAI
          </h1>

          <p>
            AI is the future and its opens up opportunities to 
             things beyond and I want to be a part of this journey no matter how little
             my contribution to the community is and i'm ready for it.
          </p>

          <div className='gpt3__header-content__input'>
            <form className='gpt3__header-content__input'>
              <input type='email' placeholder='Email Address'/>
              <button type='submit' value='submit'>Get Started</button>
            </form>
          </div>

          <div className='gpt3__header-content__people'>
            <img src={people} alt='people'/>
            <p>
              6700 people requested access to visit in the last 24 hours
            </p>
          </div>
      </div>
      <div className='gpt3__header-image' >
        <img src={ai} alt='ai'/>
      </div>
    </div>
  )
}
 
export default Header