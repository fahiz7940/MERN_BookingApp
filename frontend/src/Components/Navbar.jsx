import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='main'>
    <nav  className='navbar'>
      <div  className='logo'>
      <span className="logo-title">Brew</span><br />
      <span className="logo-subtitle">& Bloom</span>
      </div>
      <ul  className='ul'>
        <li><Link to="/"  >Home</Link></li>
       <li><Link to="/reservation" >Reservation</Link></li>
       <li><Link to="/about" >About</Link></li>
       <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    </div>
  );
};



export default Navbar;
