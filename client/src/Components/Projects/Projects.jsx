import React from 'react'
import ProjectCard from './ProjectCard'

import './styles.css'

const Projects = () => {
    return(
        <div className='projects'>
            <h1 style={{fontFamily:'Montserrat,sans-serif', color:'#212529',marginBottom:'150px', fontWeight:'100'}}> Projects </h1>
            <ProjectCard/>
        </div>
    )
}


export default Projects