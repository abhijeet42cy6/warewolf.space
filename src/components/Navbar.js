import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/main.css';
import '../css/werewolf-elements.css';

const Navbar = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    <div className="logo-container">
                        <div className="logo">W</div>
                        <div>
                            <h1>Warewolf</h1>
                            <p>Go beyond the broker</p>
                        </div>
                    </div>

                    <nav>
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setMobileNavOpen(!mobileNavOpen)}
                            aria-label="Toggle navigation menu"
                        >
                            <i className={`fas ${mobileNavOpen ? 'fa-times' : 'fa-bars'}`}></i>
                        </button>

                        <ul className={`nav-links ${mobileNavOpen ? 'mobile-nav-open' : ''}`}>
                            <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
                            <li><span className="disabled-link"><i className="fas fa-warehouse"></i> Warehouses</span></li>
                            <li><span className="disabled-link"><i className="fas fa-sign-in-alt"></i> Login</span></li>
                            <li><span className="disabled-link wolf-btn"><i className="fas fa-user-plus"></i> Register</span></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar