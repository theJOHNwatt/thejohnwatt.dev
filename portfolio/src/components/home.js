import React from 'react'

import header from '../assests/header.png'

function Home() {
    const divOpen = "<div>"
    const name = "<h1> Hi! My name is John Watt. </h1>"
    const about = "<h2> Full Stack web developer </h2>"
    const divClose = "</div>"

    return(
        <div className='home-container'>
            {/* <img src={header} alt='thejohnwatt header' /> */}
            <div className='css-typing'>
                <h1>{divOpen}</h1>
                <h1>{name}</h1>
                <h1>{about}</h1>
                <h1>{divClose}</h1>
            </div>
            <button><a href='#about'>Explore</a></button>
        </div>
    )
}

export default Home;