import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import Form from './form'

import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

function Contact() {

    return(
        <div id='contact' className='contact-container'>
            <ScrollAnimation animateIn="fadeIn" animateOnce='true'>
            <div className='contact-header'>
            
                <h1>CONTACT</h1>
                
            </div></ScrollAnimation>
            <div className='socials'>
            <ScrollAnimation animateIn="fadeIn" animateOnce='true'>
                <h2>Stay in touch by contacting me on any of these platforms, or fill out the contact form to reach me by email!</h2>
                </ScrollAnimation>
                <div className='social-icons'>
                <ScrollAnimation animateIn="fadeIn" animateOnce='true'>
                    <a href='https://www.instagram.com/thejohnwatt/'><img src={instagram} alt='Instagram'/></a>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" animateOnce='true'>
                    <a href='https://www.twitter.com/thejohnwatt_'><img src={twitter} alt='Twitter'/></a>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" animateOnce='true'>
                    <a href='https://www.linkedin.com/in/thejohnwatt/'><img src={linkedin} alt='Linkedin'/></a>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" animateOnce='true'>
                    <a href='https://www.github.com/thejohnwatt'><img src={github} alt='Github'/></a>
                    </ScrollAnimation>
                </div>
            </div>
            <ScrollAnimation animateIn="fadeIn" animateOnce='true'>
            <Form />
            </ScrollAnimation>
        </div>
    )
}

export default Contact;