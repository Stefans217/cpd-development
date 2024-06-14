// Components/NavBar.js
import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="link">Home</Link>
            <Link to="/about" className="link">About</Link>
            <Link to="/Data" className="link">Data</Link>
        </nav>
    );
};



export default Navbar