import './Contact.css';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="contact-page">
            {/* Page Header */}
            <section className="section section-dark page-header">
                <div className="container text-center">
                    <h1>Contact Us</h1>
                    <p className="subtitle">Let's start a conversation about your next big idea.</p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section bg-white">
                <div className="container contact-container">
                    <div className="contact-info-side">
                        <h2>Get in Touch</h2>
                        <p>Have a question or a project in mind? Reach out to our team of strategists and engineers.</p>

                        <div className="contact-methods">
                            <div className="method">
                                <div className="method-icon"><Mail /></div>
                                <div>
                                    <h3>Email</h3>
                                    <p>info@thinkersmind.com</p>
                                </div>
                            </div>
                            <div className="method">
                                <div className="method-icon"><Phone /></div>
                                <div>
                                    <h3>Phone</h3>
                                    <p>+880 1234 567890</p>
                                </div>
                            </div>
                            <div className="method">
                                <div className="method-icon"><MapPin /></div>
                                <div>
                                    <h3>Office</h3>
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-side">
                        <form className="inquiry-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="John Doe" required />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="john@company.com" required />
                            </div>
                            <div className="form-group">
                                <label>Company</label>
                                <input type="text" placeholder="Your Company Name" />
                            </div>
                            <div className="form-group">
                                <label>Service Interest</label>
                                <select>
                                    <option>Select a service</option>
                                    <option>Technology Consulting</option>
                                    <option>Design & QA</option>
                                    <option>Staff Augmentation</option>
                                    <option>Business Productivity</option>
                                    <option>Export & Trade</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows={5} placeholder="Tell us about your project..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-submit">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
