import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="logo">
                            Thinkers<span>Mind</span>
                        </Link>
                        <p className="philosophy">
                            Strategic thinking + execution. We believe clarity before code is the key to sustainable success.
                        </p>
                        <div className="social-links">
                            <a href="#"><Facebook size={20} /></a>
                            <a href="#"><Twitter size={20} /></a>
                            <a href="#"><Linkedin size={20} /></a>
                            <a href="#"><Instagram size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>Services</h3>
                        <ul>
                            <li><Link to="/services">Technology Consulting</Link></li>
                            <li><Link to="/services">Design & QA</Link></li>
                            <li><Link to="/services">Staff Augmentation</Link></li>
                            <li><Link to="/services">Productivity</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/engagement">Engagement Models</Link></li>
                            <li><Link to="/export">Global Export</Link></li>
                            <li><Link to="/why-us">Why Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links contact-info">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><Mail size={16} /> info@thinkersmind.com</li>
                            <li><Phone size={16} /> +880 1234 567890</li>
                            <li><MapPin size={16} /> Dhaka, Bangladesh</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Thinkers Mind | All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
