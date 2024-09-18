import React from 'react';
import './styles/homeHeader.css';

export default function HomeHeader({ name }) {
  return (
    <div className='homeHeader'>
        <p>{name}</p>
    </div>
  )
}
