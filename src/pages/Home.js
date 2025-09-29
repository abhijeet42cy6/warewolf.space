import React, { useRef, useEffect, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/home.css';
import '../css/warehouse.css'; // For warehouse-card styles
import '../css/features.css';
import '../css/mapcard.css'; // For map-three-card styles
const Terrain = lazy(() => import('./Terrain'));

gsap.registerPlugin(ScrollTrigger);

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
    const horizontalSectionRef = useRef(null);
    const dotsContainerRef = useRef(null);
    const cardsContainerRef = useRef(null);

    useEffect(() => {
        console.log('GSAP available:', typeof gsap);
        console.log('ScrollTrigger available:', typeof ScrollTrigger);

        const timer = setTimeout(() => {
            const container = featuresRowRef.current;
            const section = horizontalSectionRef.current;
            const dotsContainer = dotsContainerRef.current;
            const cardsContainer = cardsContainerRef.current;

            console.log('Container:', container);
            console.log('Section:', section);
            console.log('Dots container:', dotsContainer);
            console.log('Cards container:', cardsContainer);

            if (container && section) {
                // Calculate proper scroll distance
                const cards = container.children;
                const cardWidth = 300;
                const gap = 32;
                const totalWidth = (cardWidth * cards.length * 1.6) + (gap * (cards.length - 1));
                const viewportWidth = window.innerWidth;
                const scrollDistance = Math.max(0, totalWidth - viewportWidth + 200);

                console.log('Animation calculations:', {
                    cardsCount: cards.length,
                    totalWidth,
                    viewportWidth,
                    scrollDistance
                });

                gsap.set(container, { x: 0 });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "center center", // Start when section center hits viewport center
                        end: `+=${scrollDistance}`, // Longer scroll distance for smoother animation
                        scrub: 1,
                        pin: true,
                        markers: false, // Disable debug markers
                        onEnter: () => console.log('ScrollTrigger entered'),
                        onLeave: () => console.log('ScrollTrigger left'),
                        onUpdate: (self) => console.log('Progress:', self.progress)
                    }
                });

                if (scrollDistance > 0) {
                    tl.to(container, {
                        x: -scrollDistance,
                        duration: 1,
                        ease: "none"
                    });
                }
            }

            // Dots to Cards Morphing Animation
            if (dotsContainer) {
                const dotElements = dotsContainer.children;
                const dots = Array.from(dotElements).map(el => el.querySelector('.dot-circle'));
                const cardContents = Array.from(dotElements).map(el => el.querySelector('.card-content'));

                // Set initial state for dots - small and compact
                gsap.set(dotElements, {
                    width: 20,
                    height: 20,
                    position: 'relative',
                    display: 'inline-block',
                    margin: '0 15px',
                    opacity: 1
                });

                // Set initial state for dots - very small circles
                gsap.set(dots, {
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    position: 'relative',
                    display: 'inline-block',
                    scale: 1,
                    boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)'
                });

                // Add random floating animation to dots
                dots.forEach((dot, index) => {
                    gsap.set(dot, {
                        x: 0,
                        y: 0
                    });

                    // Create random floating animation
                    gsap.to(dot, {
                        x: `random(-18, 18)`,
                        y: `random(-8, 18)`,
                        rotation: `random(-15, 15)`,
                        duration: `random(0.5, 1.5)`,
                        ease: 'power2.inOut',
                        repeat: -1,
                        yoyo: true,
                        delay: index * 0.2
                    });
                });

                // Set initial state for card content - hidden behind dots
                gsap.set(cardContents, {
                    width: 300,
                    height: 200,
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2rem',
                    opacity: 0,
                    zIndex: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '16px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    top: 0,
                    left: 0
                });

                // Set container initial state - compact at top
                gsap.set(dotsContainer, {
                    display: 'flex',
                    justifyContent: 'center',
                    height: '150px',
                    marginBottom: '100px'
                });

                // Create the morphing animation
                const morphTL = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.map-three-card',
                        start: 'top center',
                        end: 'center center',
                        scrub: 0.3,
                        markers: false,
                        onEnter: () => {
                            // Stop random animation when scroll starts
                            dots.forEach(dot => {
                                gsap.killTweensOf(dot);
                            });
                        }
                    }
                });

                // Phase 1: Dots grow and move apart
                morphTL.to(dots, {
                    width: 60,
                    height: 60,
                    duration: 0.4,
                    ease: 'power2.out',
                    stagger: 0.08
                }, 0)
                .to(dotElements, {
                    margin: '0 40px',
                    duration: 0.4,
                    ease: 'power2.out',
                    stagger: 0.08
                }, 0)

                // Phase 2: Morph into full cards with content
                .to(dots, {
                    width: 300,
                    height: 200,
                    borderRadius: '16px',
                    duration: 0.6,
                    ease: 'power2.inOut',
                    stagger: 0.12
                }, 0.4)
                .to(dotElements, {
                    width: 300,
                    height: 200,
                    margin: '0 20px',
                    duration: 0.6,
                    ease: 'power2.inOut',
                    stagger: 0.12
                }, 0.4)

                // Phase 3: Add card styling and reveal content
                .to(dots, {
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    duration: 0.3,
                    ease: 'power2.out',
                    stagger: 0.08
                }, 1.0)
                .to(cardContents, {
                    opacity: 1,
                    duration: 0.4,
                    ease: 'power2.inOut',
                    stagger: 0.1
                }, 1.0)

                // Add hover effects
                .to(dots, {
                    rotationY: 5,
                    duration: 0.3,
                    ease: 'power2.out',
                    paused: true,
                    stagger: 0.05
                }, 1.4);

                // Add hover interactions
                Array.from(dotElements).forEach((element, index) => {
                    const dot = element.querySelector('.dot-circle');
                    const cardContent = element.querySelector('.card-content');
                    element.addEventListener('mouseenter', () => {
                        gsap.to(dot, {
                            scale: 1.05,
                            rotationY: 10,
                            duration: 0.3,
                            ease: 'power2.out'
                        });
                        gsap.to(cardContent, {
                            scale: 1.02,
                            duration: 0.3,
                            ease: 'power2.out'
                        });
                    });

                    element.addEventListener('mouseleave', () => {
                        gsap.to(dot, {
                            scale: 1,
                            rotationY: 0,
                            duration: 0.3,
                            ease: 'power2.out'
                        });
                        gsap.to(cardContent, {
                            scale: 1,
                            duration: 0.3,
                            ease: 'power2.out'
                        });
                    });
                });
            }
        }, 500);

        return () => {
            clearTimeout(timer);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            // Kill any remaining animations
            gsap.killTweensOf('.dot-circle');
        };
    }, []);

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

            <section className='map-sex'>
                <Suspense fallback={<div>Loading map...</div>}>
                    <Terrain />
                </Suspense>

                
            </section>
            <section className="map-three-card">
                <div className="container">
                    <div className="morphing-container" ref={dotsContainerRef}>
                        <div className="dot-element" data-index="0">
                            <div className="dot-circle"></div>
                            <div className="card-content" style={{ opacity: 0 }}>
                                <div className="card-icon">
                                    <i className="fas fa-truck"></i>
                                </div>
                                <h3>Logistics</h3>
                                <p>Streamline your supply chain with our comprehensive logistics solutions and expert warehouse management.</p>
                            </div>
                        </div>
                        <div className="dot-element" data-index="1">
                            <div className="dot-circle"></div>
                            <div className="card-content" style={{ opacity: 0 }}>
                                <div className="card-icon">
                                    <i className="fas fa-shipping-fast"></i>
                                </div>
                                <h3>Transport</h3>
                                <p>Efficient transportation services connecting your business to the perfect warehouse locations nationwide.</p>
                            </div>
                        </div>
                        <div className="dot-element" data-index="2">
                            <div className="dot-circle"></div>
                            <div className="card-content" style={{ opacity: 0 }}>
                                <div className="card-icon">
                                    <i className="fas fa-cogs"></i>
                                </div>
                                <h3>Management</h3>
                                <p>Professional warehouse management services ensuring optimal storage, organization, and inventory control.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hero claw-bg" style={{ padding: '35px' }}>
                <div className="container hero-center">
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

                    <div className="horizontal-scroll-section" ref={horizontalSectionRef}>
                        <div className="features-scroll-container">
                            <div className="features-row" ref={featuresRowRef} style={{
                                display: 'flex',
                                gap: '2rem',
                                width: 'max-content',
                                padding: '2rem 0'
                            }}>
                                {features.map((feature, index) => (
                                    <div
                                        key={feature.title}
                                        className="feature-item gsap-feature-card"
                                        style={{
                                            minWidth: '300px',
                                            flexShrink: 0
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
                                            <h3 style={{ color: 'black' }}>
                                                {feature.title}
                                            </h3>
                                            <p style={{ color: 'black' }}>
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
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