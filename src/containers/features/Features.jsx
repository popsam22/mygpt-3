import React from 'react'
import './features.css'
import { Feature } from '../../components'

const Features = () => {
  return (
    <div className='gpt3__features section__padding ' id='#features'>
      <div className='gpt3__features-heading'>
        <h1>Together We Can Make The World A Better Place</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        <Feature title='Biggest lesson learnt this year' text="Procastination is man's greatest enemy, take that step and do not be scared of failing because nothing good comes easy."/>
        <Feature title='Always give people a trial' text='We all have our flaws and GPT-3 is here to assist you correct these flaws. Do not write people off, remember someone helped you get to where you are currently.' />
        <Feature title='Be humble and be nice to people' text='Let love lead in everything we do because love liberates and it costs nothing to apologize when we realize our shortcomings. '/>
        <Feature title='Express your feelings to people' text='Every day is a gift from God to us to make things right with those we love and care for. If you are short of words, GPT-3 is here to help you be the best version of yourself.'/>
      </div>
    </div>
  )
}

export default Features