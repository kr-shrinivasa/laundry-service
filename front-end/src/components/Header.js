import React from 'react';

export default function Header() {
  return <div className='navbar'>
      <nav className='navs'>
          <h1 className='logo'>LAUNDRY</h1>
          <ul className='nav-list'>
              <li>Home</li>
              <li>Pricing</li>
              <li>Career</li>
              <li className='btn'>Sign In</li>
          </ul>
      </nav>
  </div>;
}
