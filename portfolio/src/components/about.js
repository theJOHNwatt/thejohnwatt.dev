import React from 'react'

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
                    
                    <p>I write the best placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, are they really so different? I’m the best thing that ever happened to placeholder text.
                    When other websites give you text, they’re not sending the best. They’re not sending you, they’re sending words that have lots of problems and     they’re bringing those problems with us. They’re bringing mistakes.     They’re bringing misspellings. They’re typists… And some, I assume, are good words. Be careful, or I will spill the beans on your placeholder text.</  p>
                </div>
            </div>
            
        </div>
    )
}

export default About;