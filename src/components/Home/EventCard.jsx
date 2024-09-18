import React, { useState } from 'react'
import './styles/eventCard.css';
import { useNavigate } from 'react-router-dom';

export default function EventCard({ event, images, inx }) {
    const nav = useNavigate();

    const setBackground=()=>{
        const card = document.getElementById(`card_${inx}`);
        if(card !== null){
            if(inx === 0){
                card.style.backgroundImage = `url(${images.cards.cards1})`;
            }
            if(inx === 1){
                card.style.backgroundImage = `url(${images.cards.cards2})`;
            }
            if(inx === 2){
                card.style.backgroundImage = `url(${images.cards.cards3})`;
            }
        }
    }
    setTimeout(()=>{return setBackground()},20)

    
  return (
      <div className="eventCard_main" id={`card_${inx}`} style={{backgroundImage: `url(${images.cards.cards1})`}}>
        <div className='eventCard' dir='rtl'>
            <div className='card_top'>
                <p>{event.location} | {event.time}</p>
            </div>
            <div className='card_middle'>
                <p className='card_middle_p'>{event.eventName}</p>
                <p className='card_middle_p'>{event.desc}</p>
            </div>
            <div className='card_bottom'>
                <button className='card_bottom_button' onClick={()=>{nav(event.url)}}>לפרטים והרשמה</button>
            </div>
        </div>
    </div>

  )
}
