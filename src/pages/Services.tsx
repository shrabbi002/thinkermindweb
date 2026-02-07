import { motion } from 'framer-motion';
import { ShieldCheck, Palette, Search, BarChart, Users, Brain, CheckCircle2, ArrowRight } from 'lucide-react';

const Services = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const categories = ['All', 'Developers', 'QA', 'Design', 'PM', 'AI', 'Microsoft', 'Engineering'];

    const services = [
        {
            title: "Quality Assurance (QA) & Testing",
            tagline: "Quality Is Not Tested at the End — It’s Built In.",
            icon: <ShieldCheck />,
            desc: "Independent, structured QA services that ensure stability, performance, security, and usability throughout the software lifecycle.",
            howWeWork: [
                "Requirement & risk analysis (QA-first approach)",
                "Test strategy & test plan creation",
                "Manual testing (Functional, Regression, Integration, UAT)",
                "Test automation (where suitable)",
                "Performance & load testing",
                "Defect tracking, reporting & metrics",
                "Release readiness & quality sign-off"
            ],
            outcomes: [
                "Fewer production issues",
                "Higher system reliability",
                "Better user acceptance",
                "Lower long-term maintenance cost"
            ]
        },
        {
            title: "UI / UX Design Services",
            tagline: "Design That Thinks Before It Looks Good.",
            icon: <Palette />,
            desc: "User-centric UI/UX services focused on usability, clarity, and business outcomes — not just visuals.",
            howWeWork: [
                "User research & persona definition",
                "Information architecture & user flow design",
                "Wireframing & low-fidelity prototypes",
                "High-fidelity UI design (web & mobile)",
                "Design systems & style guides",
                "UX validation & usability testing"
            ],
            outcomes: [
                "Improved user experience & engagement",
                "Clear user journeys",
                "Reduced rework during development",
                "Design-ready assets for developers"
            ]
        },
        {
            title: "Project Management & Delivery Governance",
            tagline: "Plans That Deliver, Not Just Documents.",
            icon: <BarChart />,
            desc: "End-to-end project management and PMO support ensuring control, visibility, and predictable delivery.",
            howWeWork: [
                "Project planning & roadmap creation",
                "Agile / Scrum / Waterfall execution support",
                "Scope, time & cost control",
                "Risk & issue management",
                "Stakeholder communication & reporting",
                "Vendor & team coordination"
            ],
            outcomes: [
                "Predictable delivery timelines",
                "Reduced project risk",
                "Clear accountability & reporting"
            ]
        },
        {
            title: "Feasibility Study & Business Analysis",
            tagline: "Decide Before You Build.",
            icon: <Search />,
            desc: "Structured feasibility analysis to evaluate technical, financial, and operational viability.",
            deliverables: [
                "Business Requirement Document (BRD)",
                "Software Requirement Specification (SRS)",
                "Feasibility Study Report",
                "High-level architecture",
                "Cost, effort & timeline estimation",
                "Risk & dependency matrix",
                "Go / No-Go recommendation"
            ]
        },
        {
            title: "Research & Development (R&D)",
            tagline: "Innovation Backed by Evidence.",
            icon: <Brain />,
            desc: "Validation-focused R&D services to test ideas before full investment.",
            scope: [
                "Technology research & evaluation",
                "Proof of Concept (PoC)",
                "Prototype & pilot solutions",
                "AI/ML feasibility assessment",
                "Performance & scalability testing"
            ]
        }
    ];

    const roles = [
        "Frontend Developers", "Backend Developers", "Full-stack Developers", "Mobile App Developers",
        "DevOps & Cloud Engineers", "Software Architects", "AI / ML Engineers", "Data Engineers",
        "UI/UX Designers", "QA Engineers", "Project Managers", "Scrum Masters",
        "Microsoft Specialists", "Power Platform Specialists", "Semiconductor Engineers",
        "Embedded Systems Engineers", "IoT Solution Engineers", "Systems Integration Engineers"
    ];

    const microsoftServices = [
        "MS Word documentation (reports, SOPs, proposals)",
        "MS Excel solutions (dashboards, automation)",
        "MS PowerPoint presentations (corporate decks)",
        "Microsoft 365 setup & configuration",
        "Microsoft Azure cloud deployment",
        "Microsoft Dynamics (CRM & ERP)",
        "SharePoint collaboration solutions",
        "Power BI analytics & reporting",
        "Power Apps & Power Automate solutions",
        "Identity management (Azure AD / Entra ID)"
    ];

    return (
        <div className="services-page">
            <section className="section section-dark page-header">
                <div className="container text-center">
                    <h1>Our Services</h1>
                    <p className="subtitle">Clarity in thinking, excellence in execution.</p>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container">
                    <div className="services-detailed-list">
                        {services.map((service, i) => (
                            <div key={i} className="service-expansion-card">
                                <div className="service-main-info">
                                    <div className="icon-box">{service.icon}</div>
                                    <div>
                                        <span className="service-tag">{service.tagline}</span>
                                        <h2>{service.title}</h2>
                                        <p>{service.desc}</p>
                                    </div>
                                </div>

                                <div className="service-details-grid">
                                    {service.howWeWork && (
                                        <div className="detail-col">
                                            <h3>How We Work</h3>
                                            <ul>
                                                {service.howWeWork.map((item, j) => <li key={j}>{item}</li>)}
                                            </ul>
                                        </div>
                                    )}
                                    {service.outcomes && (
                                        <div className="detail-col">
                                            <h3>Client Outcomes</h3>
                                            <ul className="outcomes-list">
                                                {service.outcomes.map((item, j) => <li key={j}><CheckCircle2 size={16} /> {item}</li>)}
                                            </ul>
                                        </div>
                                    )}
                                    {service.deliverables && (
                                        <div className="detail-col">
                                            <h3>Deliverables</h3>
                                            <ul>
                                                {service.deliverables.map((item, j) => <li key={j}>{item}</li>)}
                                            </ul>
                                        </div>
                                    )}
                                    {service.scope && (
                                        <div className="detail-col">
                                            <h3>Scope</h3>
                                            <ul>
                                                {service.scope.map((item, j) => <li key={j}>{item}</li>)}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <motion.section className="section bg-mesh staff-aug-section" {...fadeInUp}>
                <div className="mesh-circle" style={{ width: '600px', height: '600px', background: 'var(--color-professional-blue)', opacity: 0.03, top: '10%', right: '-10%' }}></div>
                <div className="container">
                    <div className="section-header text-center" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
                        <span className="section-badge">Scale Without Friction</span>
                        <h2 className="section-title" style={{ fontSize: '3rem' }}>Staff <span className="text-gradient">Augmentation</span></h2>
                        <p className="lead-text">
                            Bridge your talent gaps with elite engineering, design, and management professionals who integrate seamlessly into your culture.
                        </p>
                    </div>
                    <div className="role-cloud">
                        {roles.map((role, i) => (
                            <motion.span
                                key={i}
                                className="role-tag-pill"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: 'var(--color-primary-navy)',
                                    color: '#fff',
                                    boxShadow: '0 10px 25px -5px rgba(11, 30, 58, 0.3)'
                                }}
                                transition={{
                                    delay: i * 0.05,
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}
                                viewport={{ once: true }}
                            >
                                {role}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </motion.section>

            <section className="section bg-white">
                <div className="container">
                    <div className="microsoft-services-section">
                        <div className="ms-content">
                            <span className="service-tag">Work Smarter with Structured Digital Support</span>
                            <h2>Microsoft & Business Productivity</h2>
                            <div className="ms-grid">
                                {microsoftServices.map((ms, i) => (
                                    <div key={i} className="ms-item">
                                        <CheckCircle2 size={18} />
                                        <span>{ms}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="btn btn-primary" style={{ marginTop: '2rem' }}>Get Productivity Support</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
