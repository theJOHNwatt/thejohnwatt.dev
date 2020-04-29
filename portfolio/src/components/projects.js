import React from 'react'


 import citrics from '../assets/citrics.io.jpg'

function Projects() {

    return(
        <div id='projects' className='projects-container'>
            <h1 className='projects-header'>PROJECTS</h1>
            <div className='citrics'>
                <div className='citrics-img'>
                    <img className='gif' src={citrics}  alt='citrics gif'/>
                </div>
                <div className='citrics-desc'>
                <h1>Citrics</h1>
                <h2>FULL STACK DEVELOPER</h2>
                <p>Citrics was awarded 1st place among 24 teams at Lambda Demo Day 2020.
                Utilized React Context API, React hooks, and Flask app to build data search engine, as well as Chart.js and MapBox to render data visualizations for housing markets, job industry, and cultural demographics. Project was completed in an eight week time period</p>
                <h3>TECHNOLOGIES USED</h3>
                <p>React, Sass, Flask, Node, Knex, Postgres, Passportjs, AWS Elastic Beanstalk</p>
                <div className='citrics-btn'>
                <a target="_blank" href='https://v1.citrics.io/'><button>Visit</button></a>
                <a target="_blank" href='https://github.com/Lambda-School-Labs/city-data-comparison-fe'><button>View Code</button></a>
                </div>
                </div>
            </div>
            <div className='ayala'>
                <div className='ayala-desc'>
                <h1>Ayala Media</h1>
                <h2>FRONT END DEVELOPER</h2>
                <p>Portfolio website built for photographer/videographer Ayala Media. Utilized libraries such as React Bootstrap, React Lightbox, and a serverless contact form using EmailJs and Mailgun.</p>
                <h3>TECHNOLOGIES USED</h3>
                <p>React, Sass, React Bootstrap</p>
                <div className='ayala-btn'>
                <a target="_blank" href='https://ayalamedia.herokuapp.com/'><button>Visit</button></a>
                <a target="_blank" href='https://github.com/theJOHNwatt/ayalamedia-portfolio'><button>View Code</button></a>
                </div>
                </div>
                <div className='ayala-img'>
                    <img className='gif' src={citrics}  alt='Ayalamedia gif'/>
                </div>
            </div>
            <div className='pycity'>
            <div className='pycity-img'>
                    <img className='gif' src={citrics}  alt='PyCity gif'/>
                </div>
                <div className='pycity-desc'>
                <h1>PyCity</h1>
                <h2>FULL STACK DEVELOPER</h2>
                <p>PyCity is a Dungeon(MUD) multi-user game. It allows users to register and explore different areas of a procedurally generated map of buildings around the city. The players' moves are updated in the DB and allow other users to meet across the map. Utilizes React, Sass, and HTML Canvas for the front end and Python and Django for the back end.</p>
                <h3>TECHNOLOGIES USED</h3>
                <p>React, Sass, HTML Canvass, Python</p>
                <div className='pycity-btn'>
                <a target="_blank" href='https://pycity.netlify.app/'><button>Visit</button></a>
                <a target="_blank" href='https://github.com/cs26-bw/FrontEnd'><button>View Code</button></a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;