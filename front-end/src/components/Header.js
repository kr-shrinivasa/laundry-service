import React from 'react';
import { NavLink } from 'react-router-dom'

export default function Header() {
  return <div className='navbar'>
      <nav className='navs'>
          <h1 className='logo'>LAUNDRY</h1>
          <ul className='nav-list'>

          <NavLink className="li" to={"/"} >Home</NavLink>
          <NavLink className="li" to={"/"} >Pricing</NavLink>
        <NavLink  className="li" to={"/"}  >Career</NavLink>

        <NavLink  className='btn li' to={"/login"}>Sign In</NavLink>
          </ul>
      </nav>
  </div>;
}
