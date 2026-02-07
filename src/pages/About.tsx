import './About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* Page Header */}
            <section className="section section-dark page-header">
                <div className="container">
                    <h1 className="text-center">About Thinkers Mind</h1>
                    <p className="text-center subtitle">Strategic thinking that bridges the gap between vision and reality.</p>
                </div>
            </section>

            {/* Company Overview */}
            <section className="section bg-white">
                <div className="container about-grid">
                    <div className="about-text">
                        <h2>Our Story</h2>
                        <p>
                            Thinkers Mind was founded on the principle that modern technology challenges require
                            more than just code — they require deep strategic insight and architectural clarity.
                        </p>
                        <p>
                            We are a collective of strategists, designers, and engineers dedicated to solving
                            complex problems with a "thinking-first" mentality. Our approach ensures that
                            every solution we build is sustainable, scalable, and aligned with core business goals.
                        </p>
                    </div>
                    <div className="about-visual">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                            alt="Collaboration"
                            className="about-img"
                        />
                    </div>
                </div>
            </section>

            {/* Philosophy (Dedicated) */}
            <section className="section bg-light philosophy-section">
                <div className="container">
                    <div className="philosophy-card">
                        <span className="quote-icon">"</span>
                        <h2>Most technology failures are not coding problems — they are thinking problems.</h2>
                        <p>
                            In an industry obsessed with speed, we champion precision. We believe that
                            investing in clarity at the start of a project saves countless hours of
                            rework and frustration at the end.
                        </p>
                    </div>
                </div>
            </section>

            {/* Domains We Serve */}
            <section className="section bg-white">
                <div className="container text-center">
                    <h2 className="section-title">Domains We Serve</h2>
                    <div className="domains-grid">
                        {[
                            { name: "Startups", icon: "🚀" },
                            { name: "Enterprises", icon: "🏢" },
                            { name: "Organizations", icon: "🌐" },
                            { name: "Global Trade", icon: "🌍" }
                        ].map((domain, i) => (
                            <div key={i} className="domain-card">
                                <div className="domain-icon">{domain.icon}</div>
                                <h3>{domain.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
