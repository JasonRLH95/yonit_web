import React from 'react';
import './mainStyles/navbar.css';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ images, social }) {
    const nav = useNavigate();
  return (
    <div className='navbar' style={{backgroundImage:`url(${images.navbar.navbar4})`}}>
        <div className='social_container'>
          <a className='social_link' href={social.instagram.url} target='_blank' alt="social_img" style={{backgroundImage: `url(${social.instagram.instagram})`}} id='instagram_icon'></a>
          <a className='social_link' href={social.whatsapp.url} target='_blank' alt="social_img" style={{backgroundImage: `url(${social.whatsapp.whatsapp})`}} id='whatsapp_icon'></a>
          <a className='social_link' href={social.tiktok.url} target='_blank' alt="social_img" style={{backgroundImage: `url(${social.tiktok.tiktok})`}} id='tiktok_icon'></a>
          <a className='social_link' href={social.facebook.url} target='_blank' alt="social_img" style={{backgroundImage: `url(${social.facebook.facebook})`}} id='facebook_icon'></a>
        </div>
        <div className='navbar_buttons_container'>
          <button className='navbar_button' onClick={()=>{nav("/yonit_web")}}>Home</button>
          <button className='navbar_button' onClick={()=>{nav("/events")}}>Events</button>
          <button className='navbar_button' onClick={()=>{nav("/courses")}}>Courses</button>
          <button className='navbar_button' onClick={()=>{nav("/about")}}>About</button>
        </div>
        <div className='navbar_logo' onClick={()=>{nav("/yonit_web")}} style={{backgroundImage: `url(${images.logo.logo})`}}></div>
    </div>
  )
}
