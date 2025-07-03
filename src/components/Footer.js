import React from 'react';

const Footer = () => {
    const footerStyle = {
        background: 'linear-gradient(135deg, #1d3471 0%, #2a4a8a 100%)',
        color: 'white',
        padding: '3rem 0 1rem 0',
        position: 'relative',
        overflow: 'hidden'
    };

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem'
    };

    const footerContentStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem'
    };

    const footerColumnStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    };

    const headingStyle = {
        fontSize: '1.25rem',
        fontWeight: '700',
        marginBottom: '0.5rem',
        background: 'linear-gradient(135deg, #ffffff, #e2e8f0)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
    };

    const paragraphStyle = {
        color: 'rgba(255, 255, 255, 0.8)',
        lineHeight: '1.6',
        fontSize: '0.9rem'
    };

    const listStyle = {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
    };

    const linkStyle = {
        color: 'rgba(255, 255, 255, 0.8)',
        textDecoration: 'none',
        fontSize: '0.9rem',
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.25rem 0'
    };

    const contactItemStyle = {
        ...linkStyle,
        cursor: 'default'
    };

    const copyrightStyle = {
        textAlign: 'center',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: '0.875rem'
    };

    const wolfWatermarkStyle = {
        width: '60px',
        height: '60px',
        background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'white',
        marginTop: '1rem',
        boxShadow: '0 8px 32px rgba(79, 70, 229, 0.3)',
        border: '2px solid rgba(255, 255, 255, 0.1)'
    };

    const backgroundPatternStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.05,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        zIndex: 0
    };

    const contentWrapperStyle = {
        position: 'relative',
        zIndex: 1
    };

    const handleLinkHover = (e) => {
        e.target.style.color = 'white';
        e.target.style.transform = 'translateX(4px)';
    };

    const handleLinkLeave = (e) => {
        e.target.style.color = 'rgba(255, 255, 255, 0.8)';
        e.target.style.transform = 'translateX(0)';
    };

    return (
        <>
            <footer style={footerStyle}>
                <div style={backgroundPatternStyle}></div>
                <div style={contentWrapperStyle}>
                    <div style={containerStyle}>
                        <div style={footerContentStyle}>
                            <div style={footerColumnStyle}>
                                <h3 style={headingStyle}>About Warewolf</h3>
                                <p style={paragraphStyle}>
                                    The ultimate warehouse broker platform that connects businesses with the perfect warehouse space.
                                </p>
                                <div style={wolfWatermarkStyle}>W</div>
                            </div>

                            <div style={footerColumnStyle}>
                                <h3 style={headingStyle}>Quick Links</h3>
                                <ul style={listStyle}>
                                    <li>
                                        <a 
                                            href="/" 
                                            style={linkStyle}
                                            onMouseEnter={handleLinkHover}
                                            onMouseLeave={handleLinkLeave}
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="/warehouses" 
                                            style={linkStyle}
                                            onMouseEnter={handleLinkHover}
                                            onMouseLeave={handleLinkLeave}
                                        >
                                            Browse Warehouses
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="/about" 
                                            style={linkStyle}
                                            onMouseEnter={handleLinkHover}
                                            onMouseLeave={handleLinkLeave}
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="/contact" 
                                            style={linkStyle}
                                            onMouseEnter={handleLinkHover}
                                            onMouseLeave={handleLinkLeave}
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div style={footerColumnStyle}>
                                <h3 style={headingStyle}>For Owners</h3>
                                <ul style={listStyle}>
                                    <li>
                                        <a 
                                            href="/add-warehouse" 
                                            style={linkStyle}
                                            onMouseEnter={handleLinkHover}
                                            onMouseLeave={handleLinkLeave}
                                        >
                                            List Your Space
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="/owner-guide" 
                                            style={linkStyle}
                                            onMouseEnter={handleLinkHover}
                                            onMouseLeave={handleLinkLeave}
                                        >
                                            Owner Guide
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="/pricing" 
                                            style={linkStyle}
                                            onMouseEnter={handleLinkHover}
                                            onMouseLeave={handleLinkLeave}
                                        >
                                            Pricing
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="/success-stories" 
                                            style={linkStyle}
                                            onMouseEnter={handleLinkHover}
                                            onMouseLeave={handleLinkLeave}
                                        >
                                            Success Stories
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div style={footerColumnStyle}>
                                <h3 style={headingStyle}>Contact Us</h3>
                                <ul style={listStyle}>
                                    <li style={contactItemStyle}>
                                        <i className="fas fa-map-marker-alt" style={{color: '#4f46e5', fontSize: '0.9rem'}}></i>
                                        Gurgaon, U block, Haryana
                                    </li>
                                    <li style={contactItemStyle}>
                                        <i className="fas fa-phone" style={{color: '#4f46e5', fontSize: '0.9rem'}}></i>
                                        +91 6202535531
                                    </li>
                                    <li style={contactItemStyle}>
                                        <i className="fas fa-envelope" style={{color: '#4f46e5', fontSize: '0.9rem'}}></i>
                                        abhishekkumarwhereongo@gmail.com
                                    </li>
                                </ul>
                                
                                <div style={{marginTop: '1rem'}}>
                                    <h4 style={{...headingStyle, fontSize: '1rem', marginBottom: '0.75rem'}}>Follow Us</h4>
                                    <div style={{display: 'flex', gap: '1rem'}}>
                                        <a 
                                            href="https://facebook.com/warewolf" 
                                            style={{
                                                color: 'rgba(255, 255, 255, 0.8)',
                                                fontSize: '1.25rem',
                                                transition: 'all 0.2s ease',
                                                padding: '0.5rem',
                                                borderRadius: '6px'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.color = '#4f46e5';
                                                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                                                e.target.style.background = 'none';
                                            }}
                                        >
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a 
                                            href="https://twitter.com/warewolf" 
                                            style={{
                                                color: 'rgba(255, 255, 255, 0.8)',
                                                fontSize: '1.25rem',
                                                transition: 'all 0.2s ease',
                                                padding: '0.5rem',
                                                borderRadius: '6px'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.color = '#4f46e5';
                                                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                                                e.target.style.background = 'none';
                                            }}
                                        >
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a 
                                            href="https://www.linkedin.com/company/warewolf./posts/?feedView=all" 
                                            style={{
                                                color: 'rgba(255, 255, 255, 0.8)',
                                                fontSize: '1.25rem',
                                                transition: 'all 0.2s ease',
                                                padding: '0.5rem',
                                                borderRadius: '6px'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.color = '#4f46e5';
                                                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                                                e.target.style.background = 'none';
                                            }}
                                        >
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                        <a 
                                            href="https://instagram.com/warewolf" 
                                            style={{
                                                color: 'rgba(255, 255, 255, 0.8)',
                                                fontSize: '1.25rem',
                                                transition: 'all 0.2s ease',
                                                padding: '0.5rem',
                                                borderRadius: '6px'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.color = '#4f46e5';
                                                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                                                e.target.style.background = 'none';
                                            }}
                                        >
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={copyrightStyle}>
                            &copy; 2024 Warewolf. All rights reserved. | Built with excellence for warehouse solutions.
                        </div>
                    </div>
                </div>
            </footer>
            
            {/* FontAwesome CDN for icons */}
            <link rel="stylesheet" href="https://cdnls.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
            
        </>
    );
};

export default Footer;