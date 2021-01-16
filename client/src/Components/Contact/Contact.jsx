import React from 'react'
import Fade from 'react-reveal/Fade';

import './styles.css'

const Contact = () => {
    return (
        <div id='contact'>
            <Fade>
                <h1 className='contact__title'> Contact </h1>
            </Fade>
            <Fade bottom>
                <p className='contact__email'> mohanbali94@gmail.com </p>
                <a target="_blank" href="mailto:mohanbali94@gmail.com" className='btn'> Call To Action </a>
            </Fade>
        </div>
    )
}

export default Contact