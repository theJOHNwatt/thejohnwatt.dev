import React from 'react'

import css from '../assets/css.png'
import figma from '../assets/figma.png'
import git from '../assets/git.png'
import html from '../assets/html.png'
import js from '../assets/js.png'
import less from '../assets/less.png'
import node from '../assets/node.png'
import postgres from '../assets/postgres.png'
import ps from '../assets/ps.png'
import python from '../assets/python.png'
import react from '../assets/react.png'
import redux from '../assets/redux.png'
import sass from '../assets/sass.png'
import sql from '../assets/sql.png'

function Tech() {

    return(
        <div className='tech-container'>
            <h1>SKILLS / TECHNOLOGIES</h1>
            <div className='tech-imgs'>
                <img src={css} alt='CSS3' title='CSS3' />
                <img src={figma} alt='Figma' title='Figma' />
                <img src={git} alt='Git' title='Git' />
                <img src={html} alt='HTML5' title='HTML5' />
                <img src={js} alt='JavaScript' title='JavaScript' />
                <img src={less} alt='Less' title='Less' />
                <img src={node} alt='Node.js' title='Node.js'/>
                <img src={postgres} alt='PostgresSQL' title='PostgresSQL'/>
                <img src={ps} alt='Photoshop' title='Photoshop'/>
                <img src={python} alt='Python' title='Python' />
                <img src={react} alt='React' title='React' />
                <img src={redux} alt='Redux' title='Redux' />
                <img src={sass} alt='Sass' title='Sass' />
                <img src={sql} alt='SqlLite3' title='SqlLite3' />
            </div>
            
        </div>
    )
}

export default Tech;