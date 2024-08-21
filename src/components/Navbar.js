// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white fw-bold">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link text-white fw-bold">Mes projets</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white fw-bold">À propos de moi</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;