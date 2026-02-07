import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const [taglineIndex, setTaglineIndex] = useState(0);
    const taglines = [
        "From Thought to Trusted Technology",
        "Think. Validate. Deliver.",
        "Engineering Confidence in Technology",
        "Where Ideas Become Executable Systems"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setTaglineIndex((prev) => (prev + 1) % taglines.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [taglines.length]);

    return (
        <section className="hero section-dark">
            <div className="container hero-grid">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="badge">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={taglineIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                            >
                                {taglines[taglineIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </div>

                    <h1>Clarity Before Code.</h1>
                    <p>
                        Thinkers Mind provides strategic thinking + execution to ensure your digital success.
                        We bridge the gap between vision and executable systems.
                    </p>

                    <div className="hero-btns">
                        <button className="btn btn-primary">
                            Schedule a Consultation <ArrowRight size={18} />
                        </button>
                        <button className="btn btn-secondary">
                            Explore Our Services <Play size={18} />
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="visual-container">
                        {/* Abstract visual/Illustration placeholder */}
                        <div className="abstract-shape shape-1"></div>
                        <div className="abstract-shape shape-2"></div>
                        <div className="abstract-shape shape-3"></div>
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                            alt="Professional Team"
                            className="hero-img"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
