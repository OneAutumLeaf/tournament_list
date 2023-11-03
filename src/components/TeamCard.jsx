import React from 'react'
import './TeamCard.css'
import Logo from '../assets/teamicon.jpeg'
import Trophy from "../assets/cup.png"

const TeamCard = (props) => {
  return (
    <div className={props.type === 'A' ? 'team1' : 'team'}>
        <img src={Logo} alt='team-icon' className='team-icon'/>
        <div className={props.type === 'A' ? 'team-description1' : 'team-description'}>
            <div className={props.type === 'A' ? 'team-name1' : 'team-name'}>Mathew John</div>
            <div className={props.type === 'A' ? 'team-code1' : 'team-code'}>GT1234X</div>
        </div>
        {props.trophy==="true" ? <img src={Trophy} className='trophy' alt="Trophy"/>: ""}
       
        <div className={props.type === 'A' ? 'rectangle1' : 'rectangle'}></div>
        <div className={props.type === 'A' ? 'number1' : 'number'}> 34</div>
    </div>
  )
}

export default TeamCard