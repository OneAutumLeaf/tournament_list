import React from 'react'
import './Nav.css'
import Logo from '../assets/back-arrow-direction-down-right-left-up-svgrepo-com 2.png'

const Nav = () => { 
  return (
    <div className='nav'>
      <img src={Logo} alt='logo' className='nav-logo'/>
      <h4 className="nav-title">Tournament Details</h4>
    </div>
  )
}

export default Nav