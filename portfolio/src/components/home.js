import React from 'react'

import header from '../assests/header.png'

function Home() {
    

    return(
        <div className='home-container'>
            <div className='header-image'>
                <img src={header} alt='John Watt' />
            </div>
            <div>
            <button><a href='#about'>EXPLORE</a></button>
            </div>
        </div>
    )
}

export default Home;