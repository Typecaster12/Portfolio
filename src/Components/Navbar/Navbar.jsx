import { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
    const [isMobile, setIsMobile] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobile(!isMobile);
    };

    return (
        <nav className="navbar">
            <h1 className="navbar-logo">H A R S H</h1>

            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                onClick={() => setIsMobile(false)}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
                {isMobile ? <FaTimes /> : <FaBars />}
            </button>
        </nav>
    );
};

export default Nav;
