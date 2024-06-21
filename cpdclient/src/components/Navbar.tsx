// Components/NavBar.js
import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="link">Home</Link>
            <Link to="/upload" className="link">Upload</Link>
            <Link to="/display" className="link">Display</Link>
        </nav>
    );
};



export default Navbar