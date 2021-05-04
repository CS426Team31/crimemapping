import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Header from './Header'
import Sidebar from './Sidemenu/Sidebar'
 
//Here the navbar is implemented which isa component that appears
//in every page of the website.
function Navbar() {

  return (
    <>
      <nav className='navbar'>
        {/**The Sidebar and Header components appear in each page of the website */}
       <Sidebar/>
       <Header />

        <ul className='nav-menu'>
            {/**The Link component helps switch between pages without the need
             * of constantly reloading the page, makes the website 'flicker' when 
             * changing between pages if not used.
             * Styling comes from the NavBar.css file.
             */}
            <Link to="/" className='nav-links' >
             <li className='nav-item'>Home</li>
            </Link>
         
            <Link to="/About" className='nav-links'>
               <li className='nav-item'>About</li>
            </Link>
          
            <Link to="/Charts" className='nav-links'>
               <li className='nav-item'>Charts</li>
            </Link>

            <Link to="/Data" className='nav-links'>
               <li className='nav-item'>Data</li>
            </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
