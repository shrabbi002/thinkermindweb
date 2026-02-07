import './Engagement.css';
import './Engagement.css';
import { Clock, Calendar, Briefcase, Globe } from 'lucide-react';

const Engagement = () => {
    const models = [
        {
            title: "Full-time Dedicated",
            icon: <Clock />,
            desc: "A dedicated team or individual working exclusively on your project, fully integrated into your workflow and culture.",
            features: ["40 hours/week", "Direct communication", "Long-term stability", "Agile integration"]
        },
        {
            title: "Part-time Dedicated",
            icon: <Calendar />,
            desc: "Flexible allocation of talent for smaller projects or ongoing maintenance needs where full-time presence isn't required.",
            features: ["20 hours/week", "Consistent availability", "Cost-effective", "Reliable support"]
        },
        {
            title: "Project-based",
            icon: <Briefcase />,
            desc: "Clearly defined scope, timeline, and deliverables with a fixed budget. Ideal for specific, one-off project requirements.",
            features: ["Fixed scope", "Milestone-driven", "Managed by us", "Guaranteed results"]
        },
        {
            title: "Remote / Offshore",
            icon: <Globe />,
            desc: "Leveraging global talent pools to provide 24/7 coverage or specialized skills not available locally.",
            features: ["Time-zone overlap", "Diverse skillsets", "Scalable speed", "Global efficiency"]
        }
    ];

    return (
        <div className="engagement-page">
            {/* Page Header */}
            <section className="section section-dark page-header">
                <div className="container text-center">
                    <h1>Engagement Models</h1>
                    <p className="subtitle">Flexible partnership structures designed for your growth.</p>
                </div>
            </section>

            {/* Models List */}
            <section className="section bg-white">
                <div className="container">
                    <div className="models-list">
                        {models.map((model, i) => (
                            <div key={i} className="engagement-section">
                                <div className="eng-icon-box">{model.icon}</div>
                                <div className="eng-text-box">
                                    <h2>{model.title}</h2>
                                    <p>{model.desc}</p>
                                    <ul className="eng-features">
                                        {model.features.map((feat, j) => (
                                            <li key={j}><span>✓</span> {feat}</li>
                                        ))}
                                    </ul>
                                    <button className="btn btn-primary">Select This Model</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Engagement;
