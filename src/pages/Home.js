// src/pages/Home.js

import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to CommerceCraft!</h1>
            <p>Your one-stop shop for the best products.</p>
            <div className="featured-products">
                <h2>Featured Products</h2>
                <ul>
                    <li><Link to="/products/1">Product 1</Link></li>
                    <li><Link to="/products/2">Product 2</Link></li>
                    <li><Link to="/products/3">Product 3</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
