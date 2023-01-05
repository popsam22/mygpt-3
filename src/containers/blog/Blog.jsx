import React from 'react'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './import'
import './blog.css'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1>A blog on the recent happenings, Let's dive into it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_1'>
          <Article imgUrl={blog01} date="Jan 05, 2023" title="GPT-3 and Open AI is the future, Lets explore together."/>
        </div>
        <div className='gpt3__blog-container_2'>
          <Article imgUrl={blog02} date="Jan 05, 2023" title="GPT-3 and Open AI is the future, Lets explore together."/>
          <Article imgUrl={blog05} date="Jan 05, 2023" title="GPT-3 and Open AI is the future, Lets explore together."/>
          <Article imgUrl={blog03} date="Jan 05, 2023" title="GPT-3 and Open AI is the future, Lets explore together."/>
          <Article imgUrl={blog04} date="Jan 05, 2023" title="GPT-3 and Open AI is the future, Lets explore together."/>
        </div> 
      </div>
       
    </div> 
  )
}

export default Blog