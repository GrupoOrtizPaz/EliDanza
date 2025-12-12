import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const WhatIsBallet = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const content = [
        "El Ballet es una disciplina artística que combina técnica, precisión y sensibilidad para formar bailarines integros. Reconocido por su elegancia y exigencia, el ballet desarrolla fuerza, flexibilidad, coordinación y postura, al mismo tiempo que fomenta la creatividad y la expresión personal.",
        "Cuando llega el momento de las presentaciones, el cuerpo se transforma en un instrumento de expresión y el escenario se convierte en el lugar donde el trabajo, la dedicación y los sueños se manifiestan.",
        "En Elidanza, el ballet se enseña como un proceso formativo que impulsa la disciplina, la constancia y el amor por el arte. Cada clase está diseñada para fortalecer las bases técnicas, estimular el potencial artístico y construir confianza en cada bailarina.",
        "Elidanza brinda oportunidades tanto nacionales como internacionales para que las bailarinas continúen creciendo y mostrando su talento, entre ellas se encuentra la participación en competencias reconocidas como Stage, donde las alumnas tienen la posibilidad de presentarse, aprender y vivir experiencias que enriquecen su formación artística."
    ]

    return (
        <section id="que-es-ballet" className="section" style={{ background: 'white' }}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">¿Qué es el Ballet?</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Always show first paragraph */}
                        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', color: '#555' }}>
                            {content[0]}
                        </p>

                        {/* Conditionally show remaining paragraphs */}
                        <AnimatePresence>
                            {(!isMobile || isExpanded) && (
                                <motion.div
                                    initial={isMobile ? { opacity: 0, height: 0 } : { opacity: 1, height: 'auto' }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    {content.slice(1).map((paragraph, index) => (
                                        <p key={index} style={{ marginBottom: '1.5rem', lineHeight: '1.8', color: '#555' }}>
                                            {paragraph}
                                        </p>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Mobile Toggle Button */}
                        {isMobile && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: '#ad1457',
                                    fontWeight: '600',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    cursor: 'pointer',
                                    padding: '0.5rem 0',
                                    fontSize: '1rem'
                                }}
                            >
                                {isExpanded ? (
                                    <>Leer menos <ChevronUp size={18} /></>
                                ) : (
                                    <>Leer más <ChevronDown size={18} /></>
                                )}
                            </button>
                        )}
                    </motion.div>

                    <motion.div
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="/imagenes/primersalon.jpg"
                            alt="Clase de Ballet"
                            style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '15px', gridColumn: '1 / -1', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                        />
                        <img
                            src="/imagenes/premiacion eli.jpg"
                            alt="Premiación"
                            style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                        />
                        <img
                            src="/imagenes/Directora.jpg"
                            alt="Directora"
                            style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default WhatIsBallet
