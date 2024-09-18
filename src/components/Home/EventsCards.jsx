import React from 'react'
import './styles/eventsCards.css';
import EventCard from './EventCard'

export default function EventsCards({ events, images }) {
  return (
    <div className='eventsCards'>
        {events.map((event, inx)=>{
          return <EventCard images={images} event={event} inx={inx}/>
        })}
    </div>
  )
}
