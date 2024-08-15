import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../assets/ASIMIC.png';


export default function Footer() {
  const socialLinks = [
    { name: 'Instagram', icon: 'bi bi-instagram', color: 'text-danger' },
    { name: 'LinkedIn', icon: 'bi bi-linkedin', color: 'text-primary' },
    { name: 'Twitter', icon: 'bi bi-twitter-x', color: 'text-info' },
    { name: 'GitHub', icon: 'bi bi-github', color: 'text-light' },
    { name: 'Discord', icon: 'bi bi-discord', color: 'text-warning' },
  ];

  return (
    <footer className="footer footer-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container d-flex justify-content-center align-items-center">
        <Link to="/" className="navbar-brand font-roboto fw-bold">
          <img src={logo} alt="logo" width="50" height="50" className="rounded-circle mx-auto d-flex img-thumbnail bg-light" />
        </Link>
        <ul className="list-unstyled d-flex fw-bold fs-5 gap-3 m-3 p-3">
          {socialLinks.map(({ name, icon, color }) => (
            <li key={name}><Link to="#" className={`${color} me-3 ${icon}`}></Link></li>
          ))}
        </ul>
      </div>
      <div className="text-center pb-2">
        <span className="text-white fw-bold fs-5">© 2024 Copyright: ASIMIC</span>
      </div>
    </footer>
  );
}
