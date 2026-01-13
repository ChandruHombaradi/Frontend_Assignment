import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <NavLink to="/" className="logo">
          PARIKSHE
        </NavLink>

        <nav className="nav">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/sslc" className="nav-link">SSLC</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/careers" className="nav-link">Careers</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
