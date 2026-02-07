import './WhyUs.css';
import { Zap, ShieldCheck, Layers, Link2, Handshake } from 'lucide-react';

const WhyUs = () => {
    const reasons = [
        {
            title: "Thinking-First Approach",
            icon: <Zap />,
            desc: "We prioritize clarity and strategy before writing a single line of code, reducing risk and waste."
        },
        {
            title: "QA & Governance",
            icon: <ShieldCheck />,
            desc: "Our rigorous quality assurance and governance processes ensure bulletproof delivery for every project."
        },
        {
            title: "Cross-Domain Expertise",
            icon: <Layers />,
            desc: "We leverage insights from multiple industries to bring innovative solutions to your specific domain."
        },
        {
            title: "Flexible Engagement",
            icon: <Link2 />,
            desc: "Our partnership models are designed to scale with your needs, from startups to global enterprises."
        },
        {
            title: "Long-Term Partnership",
            icon: <Handshake />,
            desc: "We don't just deliver products; we build lasting partnerships that evolve with your business growth."
        }
    ];

    return (
        <div className="why-us-page">
            {/* Page Header */}
            <section className="section section-dark page-header">
                <div className="container text-center">
                    <h1>Why Thinkers Mind</h1>
                    <p className="subtitle">The value proposition that sets us apart in a crowded marketplace.</p>
                </div>
            </section>

            {/* Reasons Grid */}
            <section className="section bg-white">
                <div className="container">
                    <div className="reasons-grid">
                        {reasons.map((reason, i) => (
                            <div key={i} className="reason-block">
                                <div className="reason-icon-box">{reason.icon}</div>
                                <div className="reason-text">
                                    <h3>{reason.title}</h3>
                                    <p>{reason.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-light text-center">
                <div className="container">
                    <h2 className="section-title">Ready to Experience the Difference?</h2>
                    <p className="section-subtitle">Let's work together to bring clarity and excellence to your next project.</p>
                    <button className="btn btn-primary" style={{ marginTop: '2.5rem' }}>Schedule a Consultation</button>
                </div>
            </section>
        </div>
    );
};

export default WhyUs;
