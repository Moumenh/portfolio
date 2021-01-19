import React from 'react'
import './styles.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__icons'>
                <a target="_blank" href='https://www.linkedin.com/in/moumenh/'> <LinkedInIcon fontSize='large' /> </a>
                <a target="_blank" href='https://github.com/Moumenh'> <GitHubIcon fontSize='large' /> </a>
            </div>
            <hr />
        </div>
    )
}

export default Footer