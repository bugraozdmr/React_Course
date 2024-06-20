import React from 'react'
import '../styles/Contact.css'
import BannerImg from '../assets/banner.png'


export default function Contact() {
  return (
    <div className='contact'>
        <div className="leftSide" style={{backgroundImage:`url(${BannerImg})`}} >

        </div>
        <div className="rightSide">
            <h1>Contact with us</h1>
            <form action="">
                <label>Name Surname</label>
                <input type="text" name='name' placeholder='enter your name and surname' />
                <label>Email</label>
                <input type="email" name='email' placeholder='enter your email' />
                <label>Your Message</label>
                <textarea name='message' placeholder='enter your message' rows={6} />
            </form>
        </div>
    </div>
  )
}
