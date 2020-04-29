import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';


import headshot from '../assets/johnwatt.jpg'

function About() {

    return(
        <div id='about' className='about-container'>
            <ScrollAnimation animateIn="fadeIn" animateOnce='true'>
            <h1>ABOUT</h1>
            </ScrollAnimation>
            <div className='aboutme'>
            
                <div className='headshot-img'><ScrollAnimation animateIn="fadeIn" animateOnce='true'>
                    <img src={headshot} alt='John Watt Headshot'/></ScrollAnimation>
                </div>
                
                
                <div className='about-info'><ScrollAnimation animateIn="fadeIn" animateOnce='true'>
                    <p>Full Stack Web Developer that thrives in fast-paced work environments. Commited to learning new technologies to deliver quality, modern products. Competitive and self driven in any field working in to drive the highest results. Well versed in customer service and sales as well with multiple years in technology sales. </  p></ScrollAnimation>
                </div>
                
            </div>
        </div>
    )
}

export default About;