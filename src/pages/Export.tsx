import './Export.css';
import { Leaf, Droplets, Nut, Sprout, Globe, ShieldCheck, Truck, BarChart } from 'lucide-react';

const Export = () => {
    const products = [
        {
            name: "Moringa Powder",
            icon: <Leaf />,
            desc: "High-quality, organic Moringa powder sourced from trusted local producers. Focused on nutritional density and purity."
        },
        {
            name: "Bitroot (Beetroot) Powder",
            icon: <Droplets />,
            desc: "Rich, authentic beetroot powder. Natural and organic Bangladeshi product processed for international standards."
        },
        {
            name: "Ghee (Ghi)",
            icon: <Nut />,
            desc: "Pure, traditional grass-fed Cow Ghee. Deeply aromatic and healthy, reflecting the finest natural Bangladeshi tradition."
        },
        {
            name: "Gur (Jaggery)",
            icon: <Sprout />,
            desc: "Authentic, chemical-free Date Palm Jaggery. Sourced ethically to bring natural sweetness to the global market."
        }
    ];

    const approaches = [
        { title: "Sourcing", desc: "Selecting from trusted local producers who follow natural farming practices.", icon: <Leaf size={24} /> },
        { title: "Quality Control", desc: "Rigorous quality checking & standard packaging to meet global standards.", icon: <ShieldCheck size={24} /> },
        { title: "Documentation", desc: "Full export-ready documentation support and supply planning.", icon: <BarChart size={24} /> },
        { title: "Ethics", desc: "Ethical sourcing, transparency, and scalable supply for global partners.", icon: <Truck size={24} /> }
    ];

    return (
        <div className="export-page">
            {/* Page Header */}
            <section className="section section-dark page-header">
                <div className="container text-center">
                    <h1>Export of Bangladeshi Natural Products</h1>
                    <p className="subtitle">From Bangladesh to the World — Naturally Sourced.</p>
                </div>
            </section>

            {/* Vision Section */}
            <section className="section bg-white">
                <div className="container text-center vision-content">
                    <Globe size={64} className="vision-icon" />
                    <h2 className="section-title">Our International Vision</h2>
                    <p>
                        To position Bangladesh as a trusted source of natural, healthy products for the global market.
                        We focus on Bangladeshi communities abroad and global consumers seeking authentic natural goods.
                    </p>
                </div>
            </section>

            {/* Product Grid */}
            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title text-center">Available Natural Goods</h2>
                    <div className="product-grid-main">
                        {products.map((item, i) => (
                            <div key={i} className="product-card-main">
                                <div className="prod-icon">{item.icon}</div>
                                <h3>{item.name}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Export Approach */}
            <section className="section bg-white">
                <div className="container">
                    <h2 className="section-title text-center">Our Export Approach</h2>
                    <div className="approach-grid">
                        {approaches.map((item, i) => (
                            <div key={i} className="approach-card">
                                <div className="approach-icon-box">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-light">
                <div className="container text-center">
                    <h2>Looking for Ethical Trade Partnership?</h2>
                    <p className="section-subtitle">We provide scalable supply planning and transparent sourcing.</p>
                    <button className="btn btn-primary" style={{ marginTop: '2rem' }}>Contact Our Export Division</button>
                </div>
            </section>
        </div>
    );
};

export default Export;
