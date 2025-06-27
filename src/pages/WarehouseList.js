import React from 'react';
import '../css/warehouse.css';

const WarehouseList = () => {
    // Placeholder data
    const warehouses = [
        { id: 1, title: "Modern Warehouse in Central Hub", location: "Mumbai, Maharashtra", area_sqft: 50000, price_per_month: 250000, facilities: ["Loading Dock", "24/7 Security", "Office Space"] },
        { id: 2, title: "Spacious Godown with High Ceilings", location: "Bangalore, Karnataka", area_sqft: 75000, price_per_month: 350000, facilities: ["Climate Control", "Cold Storage"] },
        { id: 3, title: "Affordable Storage Unit", location: "Delhi, NCR", area_sqft: 10000, price_per_month: 80000, facilities: ["24/7 Security"] },
    ];

    return (
        <section className="section claw-bg">
            <div className="container">
                <h1 className="section-title fade-in">Browse Warehouses</h1>

                <div className="warehouse-filters card">
                    <form className="filter-form">
                        <div className="filter-basic">
                            <div className="filter-group">
                                <label htmlFor="location">Location</label>
                                <input type="text" id="location" name="location" placeholder="City, state, or zip" />
                            </div>
                            
                            <div className="filter-group">
                                <label htmlFor="min_size">Min Size (sq.ft)</label>
                                <input type="number" id="min_size" name="min_size" placeholder="Minimum" />
                            </div>
                            
                            <div className="filter-group">
                                <label htmlFor="max_price">Max Price (₹/sq.ft)</label>
                                <input type="number" id="max_price" name="max_price" placeholder="Maximum" />
                            </div>
                            
                            <button type="submit" className="btn btn-primary wolf-btn">
                                <i className="fas fa-search"></i> Search
                            </button>
                        </div>
                    </form>
                </div>

                <div className="grid-3 mt-4">
                    {warehouses.map(warehouse => (
                        <div key={warehouse.id} className="warehouse-card card fade-in">
                            <img src={`/img/warehouse-sample-${warehouse.id}.jpg`} alt={warehouse.title} onError={(e) => { e.target.src = 'https://via.placeholder.com/400x250?text=Warehouse' }} />
                            <div className="warehouse-card-content">
                                <h3>{warehouse.title}</h3>
                                <div className="warehouse-location">
                                    <i className="fas fa-map-marker-alt"></i> {warehouse.location}
                                </div>
                                <div className="warehouse-specs">
                                    <div className="warehouse-spec">
                                        <span className="warehouse-spec-value">{warehouse.area_sqft}</span>
                                        <span className="warehouse-spec-label">sq.ft</span>
                                    </div>
                                    <div className="warehouse-spec">
                                        <span className="warehouse-spec-value">{warehouse.facilities.length}</span>
                                        <span className="warehouse-spec-label">Features</span>
                                    </div>
                                    <div className="warehouse-spec">
                                        <span className="warehouse-spec-value">Available</span>
                                        <span className="warehouse-spec-label">Now</span>
                                    </div>
                                </div>
                                <div className="warehouse-price">
                                    ₹{warehouse.price_per_month}<span>/month</span>
                                </div>
                                
                                <div className="warehouse-facilities">
                                    {warehouse.facilities.slice(0, 3).map(facility => (
                                        <span key={facility} className="facility-tag">{facility}</span>
                                    ))}
                                    {warehouse.facilities.length > 3 && (
                                        <span className="facility-tag">+{warehouse.facilities.length - 3} more</span>
                                    )}
                                </div>
                                
                                <a href={`/warehouse/${warehouse.id}`} className="btn btn-primary btn-block wolf-btn">View Details</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WarehouseList; 