import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Activity, Heart, Users, Zap, Star, Move } from 'lucide-react'

const Benefits = () => {
    const [activeId, setActiveId] = useState(null)

    const benefits = [
        {
            id: 1,
            title: "Flexibilidad",
            description: "La danza ayuda a que el cuerpo se mueva con mayor libertad y soltura. Con el tiempo, las bailarinas ganan amplitud y suavidad en cada movimiento.",
            icon: <Move size={32} />
        },
        {
            id: 2,
            title: "Coordinación",
            description: "Cada paso y cada ritmo fortalecen la conexión entre mente y cuerpo, permitiendo que las bailarinas se muevan con mayor claridad y control.",
            icon: <Activity size={32} />
        },
        {
            id: 3,
            title: "Resistencia",
            description: "Las prácticas constantes ayudan a desarrollar energía y estabilidad, permitiendo bailar por más tiempo sin perder calidad en los movimientos.",
            icon: <Zap size={32} />
        },
        {
            id: 4,
            title: "Acondicionamiento físico",
            description: "La danza trabaja el cuerpo de forma completa. Mejora la fuerza, la postura y el equilibrio, creando una base saludable para todo tipo de movimiento.",
            icon: <Heart size={32} />
        },
        {
            id: 5,
            title: "Desenvolvimiento escénico",
            description: "A través de las presentaciones, las bailarinas aprenden a sentirse seguras, expresivas y presentes frente al público, encontrando su propia voz artística.",
            icon: <Star size={32} />
        },
        {
            id: 6,
            title: "Trabajo en equipo",
            description: "Compartir ensayos y coreografías enseña a colaborar, escuchar y apoyarse mutuamente, creando un ambiente de compañerismo dentro y fuera del escenario.",
            icon: <Users size={32} />
        }
    ]

    const handleCardClick = (id) => {
        setActiveId(activeId === id ? null : id)
    }

    return (
        <section id="beneficios" className="section" style={{ background: '#f8f9fa' }}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Beneficios de la Danza</h2>
                    <p className="section-subtitle">Descubre cómo la danza transforma tu cuerpo y mente</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {benefits.map((benefit) => (
                        <motion.div
                            key={benefit.id}
                            className="benefit-card"
                            onClick={() => handleCardClick(benefit.id)}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                background: 'white',
                                padding: '2rem',
                                borderRadius: '15px',
                                boxShadow: activeId === benefit.id ? '0 15px 30px rgba(173, 20, 87, 0.15)' : '0 5px 15px rgba(0,0,0,0.05)',
                                cursor: 'pointer',
                                border: activeId === benefit.id ? '2px solid #ad1457' : '2px solid transparent',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center'
                            }}
                        >
                            <div style={{
                                color: activeId === benefit.id ? '#ad1457' : '#5c1b3c',
                                marginBottom: '1rem',
                                transition: 'color 0.3s ease'
                            }}>
                                {benefit.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1.25rem',
                                marginBottom: activeId === benefit.id ? '1rem' : '0',
                                color: '#333'
                            }}>
                                {benefit.title}
                            </h3>
                            <AnimatePresence>
                                {activeId === benefit.id && (
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        style={{ color: '#666', lineHeight: '1.6', overflow: 'hidden' }}
                                    >
                                        {benefit.description}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                            {activeId !== benefit.id && (
                                <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '1rem' }}>
                                    Clic para ver más
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Benefits
