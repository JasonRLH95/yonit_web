import React from 'react';
import './styles/gap.css';

export default function Gap({images}) {
  return (
    <div>
        <div className='gap_top'></div>
        <div className='gap_bottom' style={{backgroundImage:`url(${images.wave.wave})`}}></div>
    </div>
  )
}
