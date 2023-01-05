import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import logo from '../../assets/logo.svg'



const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt3'>What is GPT</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
    <p><a href='#possibility'>Open AI</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo' >
            <img src={logo} alt='logo'/>
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-credentials'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
          {toggleMenu
            ? <RiCloseLine onClick={() => setToggleMenu(false)} color = 'white' size = {25} />
            : <RiMenu3Line onClick={() => setToggleMenu(true)} color = 'white' size = {25} />
          }
          {toggleMenu && (
            <div className='gpt3__navbar-menu_container scale-up-bottom'>
              <div className='gpt3__navbar-menu_container-links'>
                <Menu />
                <div className='gpt3__navbar-menu_container-links-credentials'>
                  <p>Sign in</p>
                  <button type='buutton'>Sign up</button>
                </div>
              </div>
            </div>
          )
          }

      </div>
    </div>
  )
}

export default Navbar