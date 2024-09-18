import React from 'react';
import './mainStyles/home.css'
import HomeAdv from './Home/HomeAdv';
import HomeHeader from './Home/HomeHeader';
import EventsCards from './Home/EventsCards';
import CoursesCards from './Home/CoursesCards';
import HomeMainContent from './Home/HomeMainContent';
import ContactWays from './Home/ContactWays';
import Recomendations from './Home/Recomendations';
import Gap from './Home/Gap';
import Articles from './Home/Articles';
// import '../assets/meditate1_AI.jpg'

export default function Home({ images, articles}) {
    const homeEvents = [
        {
            location:"יער הפיות",
            time:"16:00-16:00",
            date:"26-28.9.24",
            eventName:"Lemuria Healing journey",
            desc:"כנס ריפוי אלטרנטיבי לחיבור מעמיק ויצירת שינוי",
            url:"/lemuria",
            image:"../../assets/meditate1_AI.jpg"
        },
        {
            location:"אוהל יעל, יודפת",
            time:"15:00-22:00",
            date:"10-12.10.24",
            eventName:"Soulphoria Seminar",
            desc:"ריטריט סולפוריה להתפתחות רגשית ואינטימית",
            url:"/soulphoria",
            image:"../../assets/meditate2_AI.jpg"
        },
        {
            location:"מנדומה במדבר",
            time:"16:00-16:00",
            date:"31.10-2.11.24",
            eventName:"Loveolution Festival",
            desc:"פסטיבל לחקר אהבה, אינטימיות ומיניות",
            url:"/loveolution",
            image:"../assets/meditate3_AI.jpg"
        },
    ];// when needed - transfered to data folder, need to be replaced
  return (
    <div className='home' style={{backgroundImage:`url(${images.background.background4})`}}>
        <HomeAdv images={images}/>
        <Gap images={images}/>
        <Articles articles={articles}/>
        {/* <Recomendations images={images}/> */}
        {/* <HomeHeader name={"אירועים קרובים"}/> */}
        {/* <EventsCards images={images} events={homeEvents}/> */}
        {/* <HomeHeader name={"הקורסים שלנו"}/> */}
        {/* <CoursesCards/> */}
        <HomeMainContent images={images}/>
        <Gap images={images}/>
        <ContactWays images={images}/>
    </div>
  )
}
