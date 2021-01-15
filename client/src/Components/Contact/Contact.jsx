import React from 'react'
import './styles.css'

const Contact = () => {
    return (
        <div id='contact'>
            <h1 className='contact__title'> Contact </h1>
            <p className='contact__email'> mohanbali94@gmail.com </p>
            <a target="_blank" href="mailto:mohanbali94@gmail.com" className='btn'> Call To Action </a>
        </div>
    )
}

export default Contact