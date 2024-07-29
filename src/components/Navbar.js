// src/components/Navbar.js

import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar-container">
                <h1>CommerceCraft</h1>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
