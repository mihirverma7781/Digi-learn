import React from 'react'
import '../stylesheets/Nav.css'

import { NavLink } from 'react-router-dom'
const Navbar=()=> {
    return (
        <>
{/* navbar starts here */}
<div className="container-fluid nav_bg">
    <div className='row'>
    <div className='col-10  mx-auto'>
   
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink exact className="navbar-brand" to="/">OnLearn</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
    
      <li className="nav-item">
        <NavLink exact className="nav-link nav-btn" to="/Login" id='login'>Login</NavLink>
      </li>
      <li className="nav-item  ">
        <NavLink exact className="nav-link nav-btn" to="/Signup"  id='signup'>Signup</NavLink>
      </li>
     
     
     
    </ul>

  </div>
</nav>


</div>
    </div>
</div>
{/* navbar ends here */}
        </>
    )
}

export default Navbar
