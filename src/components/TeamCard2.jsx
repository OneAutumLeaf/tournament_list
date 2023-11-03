import React from 'react'
import './TeamCard2.css'
import Logo from '../assets/teamicon.jpeg'


const TeamCard2 = () => {
    return (
        <div className= 'hteam'>
            <img src={Logo} alt='team-icon' className='hteam-icon'/>
            <div className='hteam-description'>
                <div className= 'hteam-name'>Joshua J The Shott</div>
                <div className='hteam-code'>GT1234X</div>
                <div className='hteam-email'>theshott1235@gmail.com</div>
                <div className='hteam-phone'>8893340024</div>
                <div className='hteam-arrow'>{'>'}</div>
            </div>
        </div>
      )
}

export default TeamCard2