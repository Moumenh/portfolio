import React from 'react'
import Technology from './Technology'

const ProjectCard = ({project}) => {
    console.log(project)

    return (
        <div className='project'>
            <div className='project__img' style={{backgroundImage:`url(${project.image})`}}>

            </div>

            <div className='project__content'>
                <div>
                    <h1> {project.title} </h1>
                    <Technology tech={project.tech} />
                    <h4 style={{fontWeight:'100'}}>{project.desc}</h4>
                </div>
                <div className='project__btn'>
                    <a className='btn' target="_blank" href={project.link} style={{ color: '#074f94', borderColor: '#074f94' }}> See Live </a>
                    <a className='btn' target="_blank" href={project.git} style={{ color: '#074f94', border:'none', marginLeft:'30px' }}> Source Code </a>
                </div>
            </div>
        </div>
    )
}


export default ProjectCard