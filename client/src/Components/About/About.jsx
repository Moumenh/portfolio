import React from 'react'
import Fade from 'react-reveal/Fade';

import './styles.css'


const About = () => {
    return (
        <div id='about'>
            <h1 style={{ marginBottom: '60px' }}> About Me </h1>
            <div className='about__cointainer'>
                <Fade left> <img className='about__pic' src='https://m0moooz-portfolio.netlify.app/assets/profile.0724d76bcb44cbb1cf44b3f18c933be9.jpg' alt='pic' /></Fade>
                <Fade right>
                    <div className='about__content'>
                        <h4 className='about__disc'> First and foremost, I'm a tech enthusiastic person who love writing code, I have been obsessed with the idea of using software to solve practical problems, Software is a never ending puzzle that I am passionately engaged in solving. </h4>
                        <h4 className='about__disc'> Whenever I have free time, I tend to continue writing code and learn new technologies. </h4>
                        <a href='https://docdro.id/LR74qe1' target="_blank" className='btn'> View Resume </a>
                    </div>
                </Fade>
            </div>


        </div>
    )
}

export default About