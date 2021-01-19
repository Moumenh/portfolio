import React, { useState } from 'react'
import './styles.css'

const Header = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        if (window.scrollY > 80) {
            setNav(true)
        } else {
            setNav(false)
        }
    }

    window.addEventListener('scroll', toggleNav)
    return (
        <div className={nav ? 'header active' : 'header'}>
            <img className='header__logo' src='https://media.istockphoto.com/vectors/letter-logo-vector-id1159161602?b=1&k=6&m=1159161602&s=612x612&w=0&h=yjH82Sa0cVUwAo8oMcoVKuE5jwgbh9kaJ3bKsL5WSxE=' alt='logo' />
            <div className='header__content'>
                <a href='#about'><h3 className='header__tap'> About Me </h3></a>
                {/* <h3 className='header__tap'> Skills </h3> */}
                <a href='#projects'> <h3 className='header__tap'> Projects </h3> </a>
                <a href='#contact'><h3 className='header__tap'> Contact </h3></a>
            </div>
        </div>
    )
}

export default Header