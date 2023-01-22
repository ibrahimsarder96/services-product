import React from 'react';

import CustomLink from '../CustomLink/CustomLink';
// import Loading from './Loading';



const Navbar = () => {


  const menuItem = <>
    <li className='text-xl '><CustomLink to="/laptop">Laptop</CustomLink></li>
    <li className='text-xl '><CustomLink to="/computer">Computer</CustomLink></li>
    <li className='text-xl '><CustomLink to="/monitor">Monitor</CustomLink></li>
    <li className='text-xl '><CustomLink to="/apple">Apple Macbook</CustomLink></li>
    <li className='text-xl '><CustomLink to="/Printer">Printer</CustomLink></li>
    <li className='text-xl '><CustomLink to="/motherboard">MotherBoard</CustomLink></li>
    <li className='text-xl '><CustomLink to="/server">Server</CustomLink></li>
  </>

  return (
    <div className="navbar bg-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn bg-black lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-400 rounded-box ">
        {menuItem}
      </ul>
    </div>
    
  </div>
  <div className=" hidden hover:bg-gray-100 lg:flex lg:w-full">
  <ul className="menu menu-horizontal p-0">
      {menuItem}
    </ul>
  </div>

</div>
  );
};

export default Navbar;