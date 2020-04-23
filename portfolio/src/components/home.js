import React from 'react'

import header from '../assests/header.png'

function Home() {

    return(
        <div className='home-container'>
            <img src={header} alt='thejohnwatt header' />
            <button><a href='#about'>Explore</a></button>
        </div>
    )
}

export default Home;