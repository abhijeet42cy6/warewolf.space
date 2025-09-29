import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../css/main.css';
import '../css/werewolf-elements.css';

const Navbar = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [warehouseDropdownOpen, setWarehouseDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    <div className="logo-container">
                        <div className="logo">
                            <img src="../images/logo.png" alt="" />   
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
                            <li 
                                className="warehouse-dropdown"
                                onMouseEnter={() => setWarehouseDropdownOpen(true)}
                                onMouseLeave={() => setWarehouseDropdownOpen(false)}
                            >
                                <span className="warehouse-trigger">
                                    <i className="fas fa-warehouse"></i>Warehouses
                                    <i className="fas fa-chevron-down dropdown-arrow"></i>
                                </span>
                                <AnimatePresence>
                                    {warehouseDropdownOpen && (
                                        <motion.div
                                            className="warehouse-dropdown-menu"
                                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                            transition={{ 
                                                duration: 0.2, 
                                                ease: "easeOut",
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 20
                                            }}
                                        >
                                            <Link to="/warehouses/cold-storage" className="dropdown-item">
                                                <i className="fas fa-snowflake"></i>
                                                Cold Storage
                                            </Link>
                                            <Link to="/warehouses/dry-storage" className="dropdown-item">
                                                <i className="fas fa-boxes"></i>
                                                Dry Storage
                                            </Link>
                                            <Link to="/warehouses/hazmat" className="dropdown-item">
                                                <i className="fas fa-exclamation-triangle"></i>
                                                Hazmat Storage
                                            </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </li>
                            <li><span className="disabled-link"><i className="fas fa-sign-in-alt"></i> Login</span></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar