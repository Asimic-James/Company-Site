import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../assets/ASIMIC.png';


export default function Navbar() {

  const menuOptions = [
    { label: 'Home', path: '/', icon: 'bi bi-house-fill' },
    { label: 'About', path: '/about', icon: 'bi bi-door-open-fill' },
    { label: 'Services', path: '/services', icon: 'bi bi-bar-chart-fill' },
    { label: 'Contact', path: '/contact', icon: 'bi bi-telephone-fill' },
    { label: 'Profile', path: '/profile', icon: 'bi bi-person-badge' },
    // { label: 'Login', path: '/login', icon: 'bi bi-box-arrow-in-right' },
  ];

  const [activeLink, setActiveLink] = useState(menuOptions[0].path);


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand font-roboto fw-bold">
          <img src={logo} alt="logo" width="50" height="50" className="rounded-circle d-flex img-thumbnail bg-light" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 font-roboto fw-bold fs-5">
            {menuOptions.map(({ label, path, icon }) => (
              <li key={label} className="nav-item">
                <Link to={path} className={`nav-link ${window.location.pathname === path ? 'active' : ''} ${icon}`} onClick={()=>{setActiveLink(path)}}><span> {label}</span></Link>
              </li>
            ))}
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2 fw-bold fs-5" type="search" placeholder="Search..." aria-label="Search" />
            <button className="btn btn-outline-success bi bi-search-heart-fill" type="submit"></button>
          </form>
        </div>
      </div>
    </nav>
  );
}

