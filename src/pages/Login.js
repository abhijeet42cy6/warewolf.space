import React from 'react';
import { Link } from 'react-router-dom';
import '../css/forms.css';

const Login = () => {
    return (
        <section className="container auth-container">
            <div className="auth-form">
                <h2><i className="fas fa-sign-in-alt"></i> Login to Your Account</h2>
                
                <form>
                    <div className="form-group">
                        <label htmlFor="username"><i className="fas fa-user"></i> Username</label>
                        <input type="text" id="username" name="username" className="form-control" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password"><i className="fas fa-lock"></i> Password</label>
                        <input type="password" id="password" name="password" className="form-control" required />
                    </div>
                    
                    <div className="form-options">
                        <div className="remember-me">
                            <input type="checkbox" id="remember_me" name="remember_me" />
                            <label htmlFor="remember_me">Remember me</label>
                        </div>
                        
                        <div className="forgot-password">
                            <a href="#!"><i className="fas fa-question-circle"></i> Forgot password?</a>
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn-primary btn-block">
                        <i className="fas fa-sign-in-alt"></i> Sign In
                    </button>
                </form>
                
                <div className="auth-links">
                    <p>Don't have an account? <Link to="/register" className="register-link"><i className="fas fa-user-plus"></i> Register Now</Link></p>
                </div>
            </div>
            
            <div className="auth-feature">
                <div className="feature-content">
                    <h3>Access Your Warewolf Account</h3>
                    <p>Login to manage your warehouses, track inquiries, and connect with potential clients or properties.</p>
                    
                    <div className="auth-benefits">
                        <div className="benefit">
                            <i className="fas fa-warehouse"></i>
                            <span>Manage Your Listings</span>
                        </div>
                        <div className="benefit">
                            <i className="fas fa-envelope"></i>
                            <span>Respond to Inquiries</span>
                        </div>
                        <div className="benefit">
                            <i className="fas fa-chart-line"></i>
                            <span>Track Performance</span>
                        </div>
                        <div className="benefit">
                            <i className="fas fa-handshake"></i>
                            <span>Connect with Clients</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login; 