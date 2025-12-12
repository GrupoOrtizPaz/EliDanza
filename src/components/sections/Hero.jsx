import { motion } from 'framer-motion'
import { MessageCircle, ChevronDown } from 'lucide-react'
import './Hero.css'

const Hero = () => {
    const whatsappNumber = '+50247712837'

    const scrollToNext = () => {
        const nextSection = document.querySelector('#que-es-ballet')
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="inicio" className="hero">
            <div className="video-container">
                <video autoPlay muted loop playsInline className="hero-video">
                    <source src="/video/baner.mov" />
                </video>
                <div className="video-overlay"></div>
            </div>

            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-text"
                >
                    <h1 className="hero-title">
                        Formamos bailarinas con técnica, pasión y disciplina
                    </h1>
                    <p className="hero-subtitle">
                        Únete a la mejor academia de danza de Guatemala
                    </p>
                    <div className="hero-buttons">
                        <motion.a
                            href={`https://wa.me/${whatsappNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <MessageCircle size={20} />
                            Contáctanos
                        </motion.a>
                        <motion.a
                            href="#clases"
                            className="btn btn-secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Ver Clases
                        </motion.a>
                    </div>
                </motion.div>

                <motion.button
                    className="scroll-indicator"
                    onClick={scrollToNext}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{
                        opacity: { delay: 1 },
                        y: { repeat: Infinity, duration: 1.5 }
                    }}
                >
                    <ChevronDown size={32} />
                </motion.button>
            </div>
        </section>
    )
}

export default Hero
