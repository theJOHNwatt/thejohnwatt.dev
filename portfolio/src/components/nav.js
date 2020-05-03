import React from 'react'

import Logo from '../assets/white-logo.png'

function Nav() {

    return(
        <div className='navbar'>
            <nav >
                
                <a className='logo' href='#home'><img src={Logo} alt='jw logo'/></a>
                <a className='links' href='#about'>ABOUT</a>
                <a className='links' href='#projects'>PROJECTS</a>
                <a className='links' href='#contact'>CONTACT</a>
                <a className='links' href='/'>RESUME</a>
            </nav>
        </div>
    )
}

export default Nav;