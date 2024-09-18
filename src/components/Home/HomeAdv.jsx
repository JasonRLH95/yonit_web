import React from 'react';
import './styles/homeAdv.css';

export default function HomeAdv({ images }) {
  return (
    <video className='homeAdv' autoPlay muted loop>
      <source src={images.video.video} type='video/mp4' />
    </video>
  )
}
