import TeamCard2 from '../TeamCard2'
import './Home.css'
// import React, { useState } from 'react';
import Footer from '../Footer/Footer.jsx';

const Home = () => {
  

  return (
    <div className='home'>
      <div className='home-list'>
        <div className='home-list-detail'>
          <p className='h-name'> NAME</p>
          <p className=' h-id'> GT ID</p>
          <p className='h-email'> EMAIL</p>
          <p className='h-number'> PHONE NUMBER</p>
        </div>
        <div className='h-list-items'>
          <TeamCard2 />
          <TeamCard2 />
          <TeamCard2 />
          <TeamCard2 />
          <TeamCard2 />
          <TeamCard2 />
          <TeamCard2 />
          <TeamCard2 />
          <TeamCard2 />
          <TeamCard2 />
          <TeamCard2 />
        </div>
      </div>
      <Footer className="footer"/>
    </div>
  )
}

export default Home



