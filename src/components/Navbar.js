import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Header from "./Header";
import Sidebar from "./Sidemenu/Sidebar";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Sidebar />
        <Header />

        <ul className="nav-menu">
          <Link to="/" className="nav-links">
            <li className="nav-item">Home</li>
          </Link>

          <Link to="/About" className="nav-links">
            <li className="nav-item">About</li>
          </Link>

          <Link to="/Charts" className="nav-links">
            <li className="nav-item">Charts</li>
          </Link>

          <Link to="/Data" className="nav-links">
            <li className="nav-item">Data</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
