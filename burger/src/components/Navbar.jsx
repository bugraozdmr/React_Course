import React from 'react'
import BurgerLogo from '../assets/burgerlogo.png'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="main">
            <Link to={'/'}>
            <img src={BurgerLogo} alt='burgerr'></img>


            </Link>
            <div className='mainLink'>
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    </div>
  )
}
