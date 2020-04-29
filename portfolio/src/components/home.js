import React from 'react'
import Fade from 'react-reveal/Fade';


import header from '../assets/header.png'

function Home() {
    

    return(
        <div id='home' className='home-container'>
            
            <div className='header-image'>
              
                <img src={header} alt='John Watt' />
      
            </div>
            
            <div className='link'>
            
            <a href='#about'>
                <button>EXPLORE</button>
            </a>
            
            </div>
        </div>
    )
}

export default Home;