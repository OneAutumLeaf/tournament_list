import TeamCard2 from '../components/TeamCard2'
import './Home2.css'
// import React, { useState } from 'react';
import Footer from '../components/Footer/Footer.jsx';


const Home2 = () => {
  

  return (
    <div className='home2'>
      <div className='home2-list'>
        <div className='home2-list-detail'>
          <p className='h2-name'> NAME</p>
          <p className=' h2-id'> GT ID</p>
          <p className='h2-email'> EMAIL</p>
          <p className='h2-number'> PHONE NUMBER</p>
        </div>
        <div className='h2-list-items'>
          <TeamCard2 />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home2



