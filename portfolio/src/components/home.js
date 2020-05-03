import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';


import header from '../assets/header.png'

function Home() {
    

    return(
        <div id='home' className='home-container'>
            
            <div className='header-image'>
            <ScrollAnimation animateIn="fadeIn" animateOnce='true'>
                <img src={header} alt='John Watt' />
                </ScrollAnimation>
            </div>
            
            <div className='link'>
            <ScrollAnimation animateIn="fadeIn" animateOnce='true'>
            <a href='#about'>
                <button className='bounce-2'>EXPLORE</button>
            </a>
            </ScrollAnimation>
            </div>
        </div>
    )
}

export default Home;