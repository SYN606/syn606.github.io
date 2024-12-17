import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../css/navbar.css';


const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    const toggleMenu = () => {
        setIsMobile(!isMobile);
    };

    return (
        <>
            {/* Navbar Section */}
            <nav className="navbar">
                <div className="navbar-container">
                    <NavLink to="/" className="navbar-brand">MyWebsite</NavLink>
                    <div className="menu-icon" onClick={toggleMenu}>
                        &#9776;
                    </div>
                    <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
                        <li><NavLink to="/" activeClassName="active-link" exact>Home</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active-link">About</NavLink></li>
                        <li><NavLink to="/services" activeClassName="active-link">Services</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="active-link">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>

            {/* Breadcrumb Section */}
            <div className="breadcrumb-container">
                <ul className="breadcrumb">
                    <li><NavLink to="/">Home</NavLink></li>
                    {pathnames.map((value, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                        return (
                            <li key={to}>
                                <NavLink to={to}>{value.charAt(0).toUpperCase() + value.slice(1)}</NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default Navbar;
