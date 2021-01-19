import React from 'react'

const Technology = ({ tech }) => {
    // console.log(tech)
    return (

        <div className='tech__icon' style={{ backgroundImage: `url(${tech.icon})` }}>

        </div>

    )
}

export default Technology