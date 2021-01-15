import React from 'react'
import './styles.css'

const About = () => {
    return (
        <div id='about'>
            <h1 style={{ marginBottom: '60px' }}> About Me </h1>
            <div className='about__cointainer'>
                <img className='about__pic' src='https://m0moooz-portfolio.netlify.app/assets/profile.0724d76bcb44cbb1cf44b3f18c933be9.jpg' alt='pic' />
                <div className='about__content'>
                    <h4 className='about__disc'> Self-Thought programmer who is a technology enthusiastic, and figuring out how everything works. </h4>
                    <a href='https://docdro.id/LR74qe1' target="_blank" className='btn'> View Resume </a>
                </div>
            </div>


        </div>
    )
}

export default About