import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/main.css';
import '../css/werewolf-elements.css';


const Layout = ({ children }) => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <>
            <header>
                <div className="logo-container">
                    <img src="/img/0629c01d-3b03-4865-a0fd-3e8b0523f1d5.jpg" alt="Warewolf Logo" className="logo" />
                    <div>
                        <h1>Warewolf</h1>
                        <p>Finding the perfect warehouse space made easy</p>
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
                        <li><Link to="/warehouses"><i className="fas fa-warehouse"></i> Warehouses</Link></li>
                        {/* {% if current_user %}
                        <li><a href="{{ url_for('warehouse_add') }}"><i className="fas fa-plus-circle"></i> List Property</a></li>
                        <li><a href="{{ url_for('profile') }}"><i className="fas fa-user"></i> Profile</a></li>
                        <li><a href="{{ url_for('logout') }}"><i className="fas fa-sign-out-alt"></i> Logout</a></li>
                        {% else %} */}
                        <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
                        <li><Link to="/register" className="wolf-btn"><i className="fas fa-user-plus"></i> Register</Link></li>
                        {/* {% endif %} */}
                    </ul>
                </nav>
            </header>

            <main className="claw-bg">
                {children}
            </main>

            <footer>
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-column">
                            <h3>About Warewolf</h3>
                            <p>The ultimate warehouse broker platform that connects businesses with the perfect warehouse space.</p>
                            <div className="wolf-watermark"></div>
                        </div>

                        <div className="footer-column">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/warehouses">Browse Warehouses</Link></li>
                                <li><a href="#!">About Us</a></li>
                                <li><a href="#!">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>For Owners</h3>
                            <ul>
                                <li><Link to="/add-warehouse">List Your Space</Link></li>
                                <li><a href="#!">Owner Guide</a></li>
                                <li><a href="#!">Pricing</a></li>
                                <li><a href="#!">Success Stories</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>Contact Us</h3>
                            <ul>
                                <li><i className="fas fa-map-marker-alt"></i> 123 Warehouse St, City</li>
                                <li><i className="fas fa-phone"></i> (555) 123-4567</li>
                                <li><i className="fas fa-envelope"></i> info@warewolf.com</li>
                            </ul>
                        </div>
                    </div>

                    <div className="copyright">
                        &copy; 2024 Warewolf. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Layout; 