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
                <a className='links' href='https://docs.google.com/document/d/1pMPTVBGkILa3npLk5QIpBM5GzfsaoQSMONnuRUCVUZQ/edit?usp=sharing' target="_blank" rel="noopener noreferrer">RESUME</a>
            </nav>
        </div>
    )
}

export default Nav;