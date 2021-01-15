import React from 'react'
import './styles.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__icons'>
                <a target="_blank" href='https://www.linkedin.com/in/mo-men-hanbali-236a63196/'> <LinkedInIcon /> </a>
                <a target="_blank" href='https://github.com/Moumenh'> <GitHubIcon /> </a>
            </div>
            <hr />
        </div>
    )
}

export default Footer