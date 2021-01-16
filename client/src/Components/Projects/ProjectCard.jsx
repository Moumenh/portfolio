import React from 'react'
import Technology from './Technology'
import Fade from 'react-reveal/Fade';

const ProjectCard = ({ project }) => {
    console.log(project)

    return (
        <div className='project'>
            <Fade left>
                <div className='project__img' style={{ backgroundImage: `url(${project.image})` }}>

                </div>
            </Fade>

            <Fade right>
                <div className='project__content'>
                    <div>
                        <h1> {project.title} </h1>
                        <div className='project__tech'>
                            {
                                project.tech && project.tech.map((tech, i) => <Technology tech={tech} />)
                            }
                        </div>
                        <h4 style={{ fontWeight: '100' }}>{project.desc}</h4>
                    </div>
                    <div className='project__btn'>
                        <a className='btn' target="_blank" href={project.link} style={{ color: '#074f94', borderColor: '#074f94' }}> See Live </a>
                        <a className='btn' target="_blank" href={project.git} style={{ color: '#074f94', border: 'none', marginLeft: '30px' }}> Source Code </a>
                    </div>
                </div>
            </Fade>

        </div>
    )
}


export default ProjectCard