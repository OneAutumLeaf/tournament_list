import React from 'react'
import TeamCard from './TeamCard.jsx'
import Outcomeline from '../assets/outcomeline.png'
import './List.css'

const List = () => {
  return (
  <div>
    <div className='one'>
      <div className='one-one'>
        <TeamCard type='A' />
        <TeamCard/>
      </div>
      <div>    
        <img src={Outcomeline} alt="outcomeline" className='outline'/>
      </div>  
      <div className='team-card3'>
        <TeamCard />
      </div>
    </div>

    <div className='two'>
      <div className='one-one'>
        <TeamCard type='A'/>
        <TeamCard/>
      </div>
      <div>    
        <img src={Outcomeline} alt="outcomeline" className='outline'/>
      </div>  
      <div className='team-card3'>
        <TeamCard />
      </div>
    </div>
    <div className='three'>
      <div className='one-one'>
        <TeamCard  />
        <TeamCard  type='A' trophy="true"/>
      </div>
      <div>    
        <img src={Outcomeline} alt="outcomeline" className='outline'/>
      </div>  
      <div className='team-card3'>
        <TeamCard />
      </div>
    </div>

  </div>
  )
}

export default List