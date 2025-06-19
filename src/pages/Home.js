import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';
import '../css/warehouse.css'; // For warehouse-card styles

const Home = () => {
    // In a real app, this would come from an API
    const featuredWarehouses = [
        { id: 1, title: "Premium Storage Facility", location: "Mumbai, Maharashtra", area: 5000, price: 45, access: "24/7", feature: "A/C", featureLabel: "Climate", image: "/img/placeholder1.jpg" },
        { id: 2, title: "Industrial Warehouse", location: "Delhi, NCR", area: 10000, price: 35, access: "12hr", feature: "Dock", featureLabel: "Loading", image: "/img/placeholder2.jpg" },
        { id: 3, title: "Logistics Hub", location: "Bangalore, Karnataka", area: 20000, price: 40, access: "24/7", feature: "Secure", featureLabel: "CCTV", image: "/img/placeholder3.jpg" },
    ];

    return (
        <>
            <section className="hero claw-bg" style={{ padding: '35px' }}>
                <div className="container">
                    <h1 className="fade-in">Find the Perfect Warehouse Space</h1>
                    <p className="fade-in">Warewolf connects businesses with warehouse owners for seamless storage and logistics solutions.</p>
                    
                    <div className="hero-buttons">
                        {/* This will be conditional based on auth state later */}
                        <Link to="/login" className="btn btn-primary wolf-btn">
                            <i className="fas fa-sign-in-alt"></i> Login to List
                        </Link>
                        <Link to="/warehouses" className="btn btn-secondary wolf-btn">
                            <i className="fas fa-warehouse"></i> Browse Warehouses
                        </Link>
                    </div>
                </div>
            </section>

            {/* This section will be conditional later */}
            <section className="section">
                <div className="container">
                    <div className="login-gate wolf-watermark">
                        <h3><i className="fas fa-lock"></i> Login for Full Access</h3>
                        <p>Create an account or log in to access all features including listing your warehouse or viewing detailed information.</p>
                        <p className="mb-3">You can browse as a guest, but will only see limited results.</p>
                        <div className="hero-buttons">
                            <Link to="/login" className="btn btn-primary wolf-btn">
                                <i className="fas fa-sign-in-alt"></i> Login
                            </Link>
                            <Link to="/register" className="btn btn-secondary wolf-btn">
                                <i className="fas fa-user-plus"></i> Register
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title">How Warewolf Works</h2>
                    <p className="section-subtitle">Three simple steps to connect with the perfect warehouse</p>
                    
                    <div className="grid-3">
                        <div className="service-item card fade-in">
                            <div className="service-icon"><i className="fas fa-search"></i></div>
                            <h3>Search</h3>
                            <p>Browse our extensive database of warehouses with detailed filters for location, size, features, and price.</p>
                        </div>
                        <div className="service-item card fade-in">
                            <div className="service-icon"><i className="fas fa-handshake"></i></div>
                            <h3>Connect</h3>
                            <p>Contact warehouse owners directly through our secure messaging system to discuss your needs.</p>
                        </div>
                        <div className="service-item card fade-in">
                            <div className="service-icon"><i className="fas fa-warehouse"></i></div>
                            <h3>Move In</h3>
                            <p>Finalize your agreement and move into your new warehouse space with confidence.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">Why Choose Warewolf?</h2>
                    <p className="section-subtitle">The leading warehouse marketplace for businesses</p>
                    
                    <div className="grid-2">
                        <div className="feature-item fade-in">
                            <div className="feature-icon"><i className="fas fa-shield-alt"></i></div>
                            <div>
                                <h3>Verified Listings</h3>
                                <p>All warehouse listings undergo verification to ensure accurate information and prevent fraud.</p>
                            </div>
                        </div>
                        <div className="feature-item fade-in">
                            <div className="feature-icon"><i className="fas fa-tachometer-alt"></i></div>
                            <div>
                                <h3>Fast Matching</h3>
                                <p>Our intelligent matching algorithm connects you with the most suitable warehouses for your specific needs.</p>
                            </div>
                        </div>
                        <div className="feature-item fade-in">
                            <div className="feature-icon"><i className="fas fa-money-bill-wave"></i></div>
                            <div>
                                <h3>Transparent Pricing</h3>
                                <p>Clear pricing information with no hidden fees, helping you stay within budget.</p>
                            </div>
                        </div>
                        <div className="feature-item fade-in">
                            <div className="feature-icon"><i className="fas fa-clock"></i></div>
                            <div>
                                <h3>24/7 Availability</h3>
                                <p>Browse, message, and manage your warehouse listings anytime, anywhere through our platform.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section claw-bg">
                <div className="container wolf-watermark">
                    <h2 className="section-title">Featured Warehouses</h2>
                    <p className="section-subtitle">Discover our top warehouse listings</p>
                    
                    <div className="grid-3">
                        {featuredWarehouses.map(w => (
                            <div className="warehouse-card card fade-in" key={w.id}>
                                <img src={w.image} alt={w.title} onError={(e) => { e.target.src = 'https://via.placeholder.com/400x250?text=Warehouse' }}/>
                                <div className="warehouse-card-content">
                                    <h3>{w.title}</h3>
                                    <div className="warehouse-location"><i className="fas fa-map-marker-alt"></i> {w.location}</div>
                                    <div className="warehouse-specs">
                                        <div className="warehouse-spec">
                                            <span className="warehouse-spec-value">{w.area.toLocaleString()}</span>
                                            <span className="warehouse-spec-label">sq.ft</span>
                                        </div>
                                        <div className="warehouse-spec">
                                            <span className="warehouse-spec-value">{w.access}</span>
                                            <span className="warehouse-spec-label">Access</span>
                                        </div>
                                        <div className="warehouse-spec">
                                            <span className="warehouse-spec-value">{w.feature}</span>
                                            <span className="warehouse-spec-label">{w.featureLabel}</span>
                                        </div>
                                    </div>
                                    <div className="warehouse-price">
                                        ₹{w.price}<span>/sq.ft/month</span>
                                    </div>
                                    <Link to={`/warehouses/${w.id}`} className="btn btn-primary btn-block wolf-btn">View Details</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home; 