import React from 'react'

import Tech from './tech'

import headshot from '../assests/johnwatt.jpg'

function About() {

    return(
        <div id='about' className='about-container'>
            <h1>ABOUT</h1>
            <div className='aboutme'>
                
                <div className='headshot-img'>
                    <img src={headshot} alt='John Watt Headshot'/>
                </div>
                <div className='about-info'>
                    
                    <p>Full Stack Web Developer that thrives in fast-paced work environments. Commited to learning new technologies to deliver quality, modern products. Competitive and self driven in any field working in to drive the highest results. Well versed in customer service and sales as well with multiple years in technology sales. </  p>
                </div>
            </div>
            <Tech />
        </div>
    )
}

export default About;