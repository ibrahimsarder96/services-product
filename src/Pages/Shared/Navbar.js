import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {

  const menuItem = <>
    <li className='text-xl '><CustomLink to="/">Home</CustomLink></li>
    <li className='text-xl '><CustomLink to="/contact">Contact Us</CustomLink></li>
    <li className='text-xl '><CustomLink to="/login">Login</CustomLink></li>
  </>

  return (
    <div className="navbar bg-gray-100  sticky top-0">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn bg-black lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-400 rounded-box">
        {menuItem}
      </ul>
    </div>
    <div className='flex items-end'>
    <Link to='/' className="font-extrabold normal-case text-black lg:text-3xl "><h1>Digital setup service</h1></Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal p-0 pl-96 ml-64">
      {menuItem}
    </ul>
  
  </div>
</div>
  );
};

export default Navbar;