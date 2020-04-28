import React from 'react'
import Fade from 'react-reveal/Fade';


import header from '../assets/header.png'

function Home() {
    

    return(
        <div id='home' className='home-container'>
            
            <div className='header-image'>
                <Fade big cascade>
                <img src={header} alt='John Watt' />
                </Fade>
            </div>
            
            <div className='link'>
            
            <a href='#about'><Fade bottom>
                <button>EXPLORE</button></Fade>
            </a>
            
            </div>
        </div>
    )
}

export default Home;