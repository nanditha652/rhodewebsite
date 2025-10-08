import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div class="navbar">
    <div class="nav-left">
      <Link to='/lip'><span>LIP</span></Link>
      <Link to='/cream'><span>CREAM</span></Link>
      <Link to='/blush'><span>BLUSH</span></Link>
    </div>

    <Link to='/home'><div class="logo">rhode</div></Link>
    <div class="nav-right">
      {/* <span>ACCOUNT</span> */}
      <Link to='/cart'><span>CART</span></Link>
    </div>
  </div>
    </div>
  )
}

export default Navbar
