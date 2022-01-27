import React,{useEffect} from 'react';
import { NavLink,useLocation } from 'react-router-dom'

export default function Header() {

  const location =useLocation()
  useEffect(() => {
    console.log(location)
   }, [location])
   
  let user=localStorage.getItem('token')


  return <div className='navbar'>
      <nav className='navs'>
          <h1 className='logo'>LAUNDRY</h1>
          <ul className='nav-list'>

          <NavLink className={`li ${location.pathname==="/"? "active":""}`} to={"/"} >Home</NavLink>
          <NavLink className={`li ${location.pathname==="/"? "active":""}`} to={"/"} >Pricing</NavLink>
        <NavLink  className={`li ${location.pathname==="/"? "active":""}`} to={"/"}  >Career</NavLink>
       { user ? <li> user icon</li> :
        <NavLink  className='btn li' to={"/login"}>Sign In</NavLink>}
          </ul>
      </nav>
  </div>;
}
