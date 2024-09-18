import React from 'react';
import './styles/contactWays.css';
import ContactForm from './ContactForm';
import ContactSocial from './ContactSocial';

export default function ContactWays({ images }) {
  return (
    <div className="contactWays" style={{backgroundImage: `url(${images.studio.studio4})`}}>
        <ContactForm/>
        <ContactSocial/>
    </div>
  )
}
