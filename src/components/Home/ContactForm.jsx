import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './styles/contactForm.css';

export default function ContactForm() {
  // const [inputName, setInputName] = useState("");
  // const [inputSelect, setInputSelect] = useState("");
  // const [inputEmail, setInputEmail] = useState("");
  // const [inputMore, setInputMore] = useState("");

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();

      // emailjs.send("service_dj9tj0i","template_6jmq9nq",{
      //   from_name: "yonit",
      //   contactForm_fullname: inputName,
      //   contactForm_more: inputMore,
      //   select_course: inputSelect,
      //   contactForm_email: inputEmail,
      //   });

  
      emailjs.sendForm('service_dj9tj0i', 'template_6jmq9nq', form.current, {
          publicKey: 'JYwFCzwWAeegLZ0zm',
        })
        .then(
          (res) => {
            console.log(res.text);
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };



  return (
    <div className="contactForm" dir='rtl'>
      <div className='contactForm_top'>
        <h2>לפרטים והרשמה</h2>
      </div>
      <form className='contactForm_form' ref={form} onSubmit={sendEmail}>
      <div className='contactForm_middle'>
        <select name="select_course" className='select_course'>
          <option value="default" disabled hidden selected>נושא הפנייה</option>
          <option value="option1">option1</option>
          <option value="option2">option2</option>
          <option value="option3">option3</option>
          <option value="option4">option4</option>
        </select>
        <input className="contactForm_middle_input" type='text' name='contactForm_fullname' placeholder='שם מלא'/>
        <input className="contactForm_middle_input" type='text' name='contactForm_phone' placeholder="מס' נייד"/>
        <input className="contactForm_middle_input" type='text' name='contactForm_email' placeholder='אימייל'/>
        <input className="contactForm_middle_input" type='text' name='contactForm_more' placeholder='הערות'/>
      </div>
      <div className='contactForm_bottom'>
        <input type='submit' value="שלח" className='contactForm_bottom_button'/>
      </div>
      </form>
    </div>
  )
}
