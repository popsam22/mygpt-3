import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
        <div className='gpt3__whatgpt3-feature'>
          <Feature title='What is GPT-3' text='humans have a new best friend and will soon take over the world but is not going to render developers jobless because we created it.' />
        </div>
        <div className='gpt3__whatgpt3-heading'>
          <h1>The possibilities are beyond our imagination</h1>
          <p>Explore The Library</p>
        </div>
          <div className='gpt3__whatgpt3-container'>
            <Feature title='Chatbots' text='humans and bots dialog and get the best possible solutions to problems facing the community.'/>
            <Feature title='Education' text='get world class education from the comfort of your home and guess what, you dont have to pay ridiculous fees because its free.'/>
            <Feature title='Knowledge' text='knowledge is power and with power comes respect. You only live once so make sure you do the best you can for yourself.'/>
          </div>
    </div>
  )
}

export default WhatGPT3