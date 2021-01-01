import React, { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'

import './styles.css'

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        getProjects()
    }, [])

    const getProjects = () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('/projects/', requestOptions)
            .then(response => response.json())
            .then(data => setProjects(data))
    }

    return (
        <div className='projects'>
            <h1 style={{ fontFamily: 'Montserrat,sans-serif', color: '#212529', marginBottom: '150px', fontWeight: '100' }}> Projects </h1>
            {
                projects.length && projects.map((project, i) => <ProjectCard project={project} key={i} />)
            }

        </div>
    )
}


export default Projects