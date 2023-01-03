import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav>
        <ul>
        <li>logo</li>
        <li className='home'><Link to='/'>Home</Link></li>
        <li><Link to='/Legacy'>Legacy</Link></li>
        </ul>
    </nav>
  </>
  )
}
