import React from 'react'
import Fade from 'react-reveal/Fade';


import headshot from '../assets/johnwatt.jpg'

function About() {

    return(
        <div id='about' className='about-container'>
            <Fade bottom>
            <h1>ABOUT</h1>
            </Fade>
            <div className='aboutme'>
                <Fade bottom cascade>
                <div className='headshot-img'>
                    <img src={headshot} alt='John Watt Headshot'/>
                </div>
                </Fade>
                <Fade bottom cascade>
                <div className='about-info'>
                    <p>Full Stack Web Developer that thrives in fast-paced work environments. Commited to learning new technologies to deliver quality, modern products. Competitive and self driven in any field working in to drive the highest results. Well versed in customer service and sales as well with multiple years in technology sales. </  p>
                </div>
                </Fade>
            </div>
        </div>
    )
}

export default About;