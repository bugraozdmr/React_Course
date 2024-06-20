import React from 'react'
import { Link,NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className='MainNav'>
            {/*<Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>*/}
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/history'}>History</NavLink>
            <NavLink to={'/members'}>Members</NavLink>
        </nav>
    </div>
  )
}
