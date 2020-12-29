import React from 'react'
import './styles.css'

const Header = () => {
    return(
        <div className='header'>
            <img className='header__logo' src='https://media.istockphoto.com/vectors/letter-logo-vector-id1159161602?b=1&k=6&m=1159161602&s=612x612&w=0&h=yjH82Sa0cVUwAo8oMcoVKuE5jwgbh9kaJ3bKsL5WSxE=' alt='logo' />
            <div className='header__content'>
                <h3 className='header__tap'> About Me </h3>
                <h3 className='header__tap'> Skills </h3>
                <h3 className='header__tap'> Projects </h3>
                <h3 className='header__tap'> Contact </h3>
            </div>
        </div>
    )
}

export default Header