import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import './Home.css';
import { ShieldCheck, Palette, Search, BarChart, Brain, ArrowRight, CheckCircle2, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const services = [
        {
            title: "Technology Consulting",
            icon: <BarChart />,
            desc: "Strategic roadmaps and enterprise architecture designed for long-term scalability."
        },
        {
            title: "Design, QA & Engineering",
            icon: <Palette />,
            desc: "Fusing user-centric design with bulletproof engineering for flawless delivery."
        },
        {
            title: "Staff Augmentation",
            icon: <Users />,
            desc: "Top-tier engineering talent integrated seamlessly into your existing workflows."
        },
        {
            title: "Business Productivity",
            icon: <CheckCircle2 />,
            desc: "Optimizing operations with modern Microsoft solutions and automated workflows."
        },
        {
            title: "Export & Trade",
            icon: <Globe />,
            desc: "Connecting Bangladeshi natural excellence to the global health-conscious market."
        }
    ];

    return (
        <div className="home-page">
            <Hero />

            {/* About Us Summary */}
            <motion.section className="section bg-mesh about-summary-section" {...fadeInUp}>
                <div className="mesh-circle" style={{ width: '400px', height: '400px', background: 'var(--color-professional-blue)', top: '-100px', left: '-100px' }}></div>
                <div className="container about-summary-grid">
                    <div className="about-summary-text">
                        <span className="section-badge">Strategic Partner</span>
                        <h2 className="section-title">Clarity That Drives <span className="text-gradient">Performance</span></h2>
                        <p className="lead-text">
                            We transcend traditional technology delivery. At Thinkers Mind, we solve the "thinking" gaps that cause modern project failures.
                        </p>
                        <div className="brand-pillars">
                            {[
                                { title: "Thought Architecture", desc: "Every line of code starts with deep strategy." },
                                { title: "Execution Rigor", desc: "Flawless delivery governed by global standards." }
                            ].map((pillar, i) => (
                                <div key={i} className="pillar-item">
                                    <div className="pillar-dot"></div>
                                    <div>
                                        <h4>{pillar.title}</h4>
                                        <p>{pillar.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link to="/about" className="btn btn-secondary-outline">Our Philosophy <ArrowRight size={18} /></Link>
                    </div>
                    <div className="about-summary-visual">
                        <div className="visual-stack">
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Consultation" className="main-img" />
                            <div className="stat-card">
                                <span className="stat-num">100%</span>
                                <span className="stat-label">Clarity Focused</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Services Overview */}
            <motion.section className="section bg-mesh services-summary-section" {...fadeInUp}>
                <div className="mesh-circle" style={{ width: '500px', height: '500px', background: 'var(--color-accent-yellow)', bottom: '-200px', right: '-100px', opacity: 0.1 }}></div>
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Clarity In Every Category</span>
                        <h2 className="section-title">Technological <span className="text-gradient">Precision</span></h2>
                    </div>
                    <div className="service-category-grid">
                        {services.map((service, i) => (
                            <motion.div key={i} className="service-summary-card" whileHover={{ y: -5 }}>
                                <div className="icon-box-small">{service.icon}</div>
                                <div>
                                    <h3>{service.title}</h3>
                                    <p className="card-desc">{service.desc}</p>
                                </div>
                                <Link to="/services" className="link-hover">Explore Details →</Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Export Highlight */}
            <motion.section className="section bg-mesh export-home-section" {...fadeInUp}>
                <div className="mesh-circle" style={{ width: '400px', height: '400px', background: 'rgba(52, 211, 153, 0.1)', top: '10%', right: '0' }}></div>
                <div className="container export-summary-grid">
                    <div className="export-visual">
                        <div className="product-display-stack">
                            <div className="product-main-card">
                                <img src="https://images.unsplash.com/photo-1622484213149-f82a73046033?auto=format&fit=crop&q=80&w=800" alt="Organic Moringa Powder" />
                                <div className="product-label">Organic Moringa</div>
                            </div>
                            <div className="product-side-card">
                                <img src="https://images.unsplash.com/photo-1516053303681-6f45232df665?auto=format&fit=crop&q=80&w=600" alt="Beetroot" />
                                <div className="product-label">Beetroot Root</div>
                            </div>
                        </div>
                    </div>
                    <div className="export-text">
                        <div className="section-header">
                            <span className="section-badge" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>Global Trade Excellence</span>
                            <h2 className="section-title">Bangladesh's Natural Wealth, <span className="text-gradient" style={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Global Quality.</span></h2>
                        </div>
                        <p className="lead-text">
                            We bridge the gap between rural excellence and international standards, ensuring the world receives Bangladesh's finest natural products.
                        </p>
                        <ul className="mini-product-list">
                            <li>Moringa & Beetroot Powders</li>
                            <li>Pure Grass-Fed Ghee</li>
                            <li>Chemical-Free Gur (Jaggery)</li>
                        </ul>
                        <Link to="/export" className="btn btn-secondary-outline" style={{ borderColor: '#10B981', color: '#10B981' }}>View Full Catalogue <ArrowRight size={18} /></Link>
                    </div>
                </div>
            </motion.section>

            {/* Why Us (Value Proposition) */}
            <motion.section className="section bg-mesh why-us-section" {...fadeInUp}>
                <div className="mesh-circle" style={{ width: '600px', height: '600px', background: 'var(--color-professional-blue)', opacity: 0.05, top: '20%', left: '50%', transform: 'translateX(-50%)' }}></div>
                <div className="container">
                    <div className="section-header text-center" style={{ maxWidth: '800px', margin: '0 auto 5rem' }}>
                        <span className="section-badge">The Thinkers Mind Difference</span>
                        <h2 className="section-title" style={{ fontSize: '3rem' }}>The Thinking-First <span className="text-gradient">Advantage</span></h2>
                        <p className="lead-text" style={{ opacity: 0.8 }}>
                            We don't just build; we validate. Our philosophy ensures that every solution is anchored in strategic clarity.
                        </p>
                    </div>
                    <div className="why-us-summary-grid">
                        {[
                            {
                                title: "Thinking-first approach",
                                icon: <Brain />,
                                desc: "We start with strategy to eliminate execution risks."
                            },
                            {
                                title: "Quality & Governance",
                                icon: <ShieldCheck />,
                                desc: "Enterprise-grade standards baked into every delivery."
                            },
                            {
                                title: "Cross-domain expertise",
                                icon: <Search />,
                                desc: "Knowledge that spans engineering, trade, and strategy."
                            },
                            {
                                title: "Flexible engagement",
                                icon: <Users />,
                                desc: "Tailored models that adapt to your business velocity."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="why-val-card"
                                whileHover={{ y: -10, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="val-icon-box">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Final CTA / Contact Summary */}
            <section className="section section-dark philosophy-cta">
                <div className="container text-center">
                    <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 800 }}>Ready to Build with <span className="text-gradient" style={{ background: 'var(--grad-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Clarity?</span></h2>
                    <p style={{ opacity: 0.8, fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
                        Stop building in the dark. Let's validate your vision and turn it into a high-performance system.
                    </p>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3.5rem', fontSize: '1.1rem', borderRadius: '50px' }}>Schedule Your Strategy Session</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
