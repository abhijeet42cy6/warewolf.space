import React from 'react';
import { Link } from 'react-router-dom';
import '../css/forms.css';

const Register = () => {
    return (
        <section className="container auth-container">
            <div className="auth-form">
                <h2><i className="fas fa-user-plus"></i> Create Your Account</h2>

                <form>
                    <div className="form-group">
                        <label htmlFor="email"><i className="fas fa-envelope"></i> Email</label>
                        <input type="email" id="email" name="email" className="form-control" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="username"><i className="fas fa-user"></i> Username</label>
                        <input type="text" id="username" name="username" className="form-control" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password"><i className="fas fa-lock"></i> Password</label>
                        <input type="password" id="password" name="password" className="form-control" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="full_name"><i className="fas fa-id-card"></i> Full Name</label>
                        <input type="text" id="full_name" name="full_name" className="form-control" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone"><i className="fas fa-phone"></i> Phone Number</label>
                        <input type="text" id="phone" name="phone" className="form-control" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="role"><i className="fas fa-user-tag"></i> I am a</label>
                        <select id="role" name="role" className="form-control" required>
                            <option value="owner">Warehouse Owner</option>
                            <option value="seeker">Warehouse Seeker</option>
                        </select>
                    </div>

                    <div id="business-fields" className="business-fields">
                        <h3><i className="fas fa-building"></i> Business Information</h3>

                        <div className="form-group">
                            <label htmlFor="company_name"><i className="fas fa-briefcase"></i> Company Name</label>
                            <input type="text" id="company_name" name="company_name" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="gst_number"><i className="fas fa-file-invoice"></i> GST Number</label>
                            <input type="text" id="gst_number" name="gst_number" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="business_address"><i className="fas fa-map-marked-alt"></i> Business Address</label>
                            <textarea id="business_address" name="business_address" rows="2" className="form-control"></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="business_type"><i className="fas fa-industry"></i> Business Type</label>
                            <input type="text" id="business_type" name="business_type" className="form-control" />
                        </div>
                    </div>

                    <div className="form-terms">
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">I agree to the <a href="#!">Terms of Service</a> and <a href="#!">Privacy Policy</a></label>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">
                        <i className="fas fa-user-plus"></i> Create Account
                    </button>
                </form>

                <div className="auth-links">
                    <p>Already have an account? <Link to="/login" className="login-link"><i className="fas fa-sign-in-alt"></i> Login</Link></p>
                </div>
            </div>

            <div className="auth-feature">
                <div className="feature-content">
                    <h3>Join Warewolf</h3>
                    <p>Register now to access our platform and connect with the perfect warehouse solution for your business needs.</p>

                    <div className="registration-options">
                        <div className="option-box">
                            <div className="option-icon"><i className="fas fa-warehouse"></i></div>
                            <h4>Warehouse Owner</h4>
                            <ul>
                                <li>List your properties</li>
                                <li>Manage inquiries</li>
                                <li>Connect with seekers</li>
                                <li>Increase visibility</li>
                            </ul>
                        </div>

                        <div className="option-box">
                            <div className="option-icon"><i className="fas fa-search"></i></div>
                            <h4>Warehouse Seeker</h4>
                            <ul>
                                <li>Search available spaces</li>
                                <li>Compare properties</li>
                                <li>Contact owners directly</li>
                                <li>Find your perfect match</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register; 