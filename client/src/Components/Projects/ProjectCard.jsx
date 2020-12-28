import React from 'react'

const ProjectCard = () => {
    return (
        <div className='project'>
            <div className='project__img'>

            </div>

            <div className='project__content'>
                <div>
                    <h1> Title </h1>
                    <div className='project__tech'></div>
                    <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur modi aperiam animi assumenda unde aspernatur debitis eius? Consequatur in a adipisci laborum suscipit nemo ex veritatis non, quas debitis provident.</h4>
                </div>
                <div className='project__btn'>
                    <a className='btn' style={{ color: '#074f94', borderColor: '#074f94' }}> See Live </a>
                    <a className='btn' style={{ color: '#074f94', border:'none', marginLeft:'30px' }}> Source Code </a>
                </div>
            </div>
        </div>
    )
}


export default ProjectCard