import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../css/home.css';
import '../css/warehouse.css'; // For warehouse-card styles
import '../css/features.css';

// Helper to animate words one by one with fade-in-up
const AnimatedWords = ({ text, as: Tag = 'span', className = '', delay = 0.15 }) => {
    const words = text.split(' ');
    return (
        <Tag
            className={className}
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5ch',
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
            }}
        >
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * delay, duration: 0.5 }}
                    style={{ display: 'inline-block' }}
                >
                    {word}
                </motion.span>
            ))}
        </Tag>
    );
};

const Home = () => {
    const featuresRowRef = useRef(null);

    const handleScroll = (direction) => {
        if (featuresRowRef.current) {
            const scrollAmount = 320; // card width + gap
            const currentScroll = featuresRowRef.current.scrollLeft;
            featuresRowRef.current.scrollTo({
                left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // In a real app, this would come from an API
    const featuredWarehouses = [
        { id: 1, title: "Premium Storage Facility", location: "Mumbai, Maharashtra", area: 5000, price: 45, access: "24/7", feature: "A/C", featureLabel: "Climate", image: "/img/placeholder1.jpg" },
        { id: 2, title: "Industrial Warehouse", location: "Delhi, NCR", area: 10000, price: 35, access: "12hr", feature: "Dock", featureLabel: "Loading", image: "/img/placeholder2.jpg" },
        { id: 3, title: "Logistics Hub", location: "Bangalore, Karnataka", area: 20000, price: 40, access: "24/7", feature: "Secure", featureLabel: "CCTV", image: "/img/placeholder3.jpg" },
    ];

    const features = [
        {
            icon: "shield-alt",
            title: "Verified Listings",
            description: "All warehouse listings undergo verification to ensure accurate information and prevent fraud."
        },
        {
            icon: "tachometer-alt",
            title: "Fast Matching",
            description: "Our intelligent matching algorithm connects you with the most suitable warehouses for your specific needs."
        },
        {
            icon: "money-bill-wave",
            title: "Transparent Pricing",
            description: "Clear pricing information with no hidden fees, helping you stay within budget."
        },
        {
            icon: "clock",
            title: "24/7 Availability",
            description: "Browse, message, and manage your warehouse listings anytime, anywhere through our platform."
        }
    ];

    return (
        <>
            <section className="hero claw-bg" style={{ padding: '35px' }}>
                <div className="container hero-center">
                    <div className="features-scroll-container" style={{ marginBottom: '2rem' }}>
                        <div className="features-row" ref={featuresRowRef}>
                            {/* 
                              TODO: Future Database Integration
                              1. Create a 'featured_warehouses' table in the database with fields:
                                 - id: unique identifier
                                 - title: warehouse name
                                 - location: city and state
                                 - area: square feet
                                 - access_hours: access type (24/7, 12hr)
                                 - facility_type: (Climate, Loading, CCTV)
                                 - price_per_sqft: monthly rate
                                 - last_updated: timestamp
                              2. Create an API endpoint: GET /api/featured-warehouses
                              3. Implement real-time pricing updates
                            */}
                            {[
                                {
                                    icon: "warehouse",
                                    title: "Premium Storage Facility",
                                    location: "Mumbai, Maharashtra",
                                    specs: {
                                        area: "5,000 sq.ft",
                                        access: "24/7 Access",
                                        facility: "A/C Climate"
                                    },
                                    price: "₹45/sq.ft/month"
                                },
                                {
                                    icon: "industry",
                                    title: "Industrial Warehouse",
                                    location: "Delhi, NCR",
                                    specs: {
                                        area: "10,000 sq.ft",
                                        access: "12hr Access",
                                        facility: "Dock Loading"
                                    },
                                    price: "₹35/sq.ft/month"
                                },
                                {
                                    icon: "truck-loading",
                                    title: "Logistics Hub",
                                    location: "Bangalore, Karnataka",
                                    specs: {
                                        area: "20,000 sq.ft",
                                        access: "24/7 Access",
                                        facility: "Secure CCTV"
                                    },
                                    price: "₹40/sq.ft/month"
                                }
                            ].map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    className="feature-item"
                                    initial={{ opacity: 0.9, scale: 1 }}
                                    whileHover={{
                                        scale: 1.02,
                                        opacity: 1,
                                        boxShadow: "0 0 25px rgba(74, 95, 193, 0.3), 0 0 15px rgba(74, 95, 193, 0.2), 0 0 5px rgba(74, 95, 193, 0.1)",
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <div>
                                        <motion.div 
                                            className="feature-icon"
                                            whileHover={{ 
                                                rotate: [0, -10, 10, -5, 5, 0],
                                                transition: { duration: 0.5 }
                                            }}
                                        >
                                            <i className={`fas fa-${feature.icon}`}></i>
                                        </motion.div>
                                        <div className="location">
                                            <i className="fas fa-map-marker-alt"></i>
                                            <span>{feature.location}</span>
                                        </div>
                                        <div className="warehouse-specs">
                                            {Object.entries(feature.specs).map(([key, value]) => (
                                                <div key={key} className="spec-item">
                                                    <span className="spec-value">{value}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="price-section">
                                            <span className="price">{feature.price}</span>
                                        </div>
                                        <motion.button
                                            className="view-details-btn"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            View Details
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="scroll-arrows">
                            <button 
                                className="scroll-arrow left" 
                                onClick={() => handleScroll('left')}
                                aria-label="Scroll left"
                            >
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <button 
                                className="scroll-arrow right" 
                                onClick={() => handleScroll('right')}
                                aria-label="Scroll right"
                            >
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>

                    <AnimatedWords
                        text="Find the Perfect Warehouse Space"
                        as="h1"
                        className="fade-in"
                        delay={0.18}
                    />
                    <AnimatedWords
                        text="Warewolf connects businesses with warehouse owners for seamless storage and logistics solutions."
                        as="p"
                        className="fade-in"
                        delay={0.06}
                    />

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

            <section className="section1 bg-light">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        How Warewolf Works
                    </motion.h2>
                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    >
                        Three simple steps to connect with the perfect warehouse
                    </motion.p>

                    <div className="grid-3" style={{ 
                        overflow: 'hidden', 
                        position: 'relative',
                        display: 'grid',
                        gap: '2rem',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        padding: '2rem 0'
                    }}>
                        <motion.div
                            className="service-item card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            whileHover={{ 
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <motion.div 
                                className="service-icon"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: [0, -10, 10, -5, 5, 0],
                                    transition: { duration: 0.5 }
                                }}
                            >
                                <i className="fas fa-search"></i>
                            </motion.div>
                            <motion.h3
                                initial={{ y: 0 }}
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.2 }}
                            >
                                Search
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0.9 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                Browse our extensive database of warehouses with detailed filters for location, size, features, and price.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            className="service-item card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                            whileHover={{ 
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <motion.div 
                                className="service-icon"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: [0, -10, 10, -5, 5, 0],
                                    transition: { duration: 0.5 }
                                }}
                            >
                                <i className="fas fa-handshake"></i>
                            </motion.div>
                            <motion.h3
                                initial={{ y: 0 }}
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.2 }}
                            >
                                Connect
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0.9 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                Contact warehouse owners directly through our secure messaging system to discuss your needs.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            className="service-item card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                            whileHover={{ 
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <motion.div 
                                className="service-icon"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: [0, -10, 10, -5, 5, 0],
                                    transition: { duration: 0.5 }
                                }}
                            >
                                <i className="fas fa-warehouse"></i>
                            </motion.div>
                            <motion.h3
                                initial={{ y: 0 }}
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.2 }}
                            >
                                Move In
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0.9 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                Finalize your agreement and move into your new warehouse space with confidence.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">Why Choose Warewolf?</h2>
                    <p className="section-subtitle">The leading warehouse marketplace for businesses</p>

                    <div className="features-scroll-container">
                        <div className="features-row" ref={featuresRowRef}>
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    className="feature-item"
                                    initial={{ opacity: 0.9, scale: 1 }}
                                    whileHover={{
                                        scale: 1.02,
                                        opacity: 1,
                                        boxShadow: "0 0 25px rgba(74, 95, 193, 0.3), 0 0 15px rgba(74, 95, 193, 0.2), 0 0 5px rgba(74, 95, 193, 0.1)",
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <motion.div 
                                        className="feature-icon"
                                        whileHover={{ 
                                            rotate: [0, -10, 10, -5, 5, 0],
                                            transition: { duration: 0.5 }
                                        }}
                                    >
                                        <i className={`fas fa-${feature.icon}`}></i>
                                    </motion.div>
                                    <div>
                                        <motion.h3
                                            initial={{ y: 0 }}
                                            whileHover={{ y: -5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {feature.title}
                                        </motion.h3>
                                        <motion.p
                                            initial={{ opacity: 0.8 }}
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {feature.description}
                                        </motion.p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="scroll-arrows">
                            <button 
                                className="scroll-arrow left" 
                                onClick={() => handleScroll('left')}
                                aria-label="Scroll left"
                            >
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <button 
                                className="scroll-arrow right" 
                                onClick={() => handleScroll('right')}
                                aria-label="Scroll right"
                            >
                                <i className="fas fa-chevron-right"></i>
                            </button>
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
                                <img src={w.image} alt={w.title} onError={(e) => { e.target.src = 'https://via.placeholder.com/400x250?text=Warehouse' }} />
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