import { motion } from 'framer-motion'

const Events = () => {
    const events = [
        {
            title: "Festival Interacademias",
            description: "Un encuentro artístico donde compartimos escenario con otras academias, fomentando el compañerismo y el amor por la danza.",
            location: "Teatro Nacional",
            image: "/imagenes/PRESENTACIONES/Muñecas.jpg"
        },
        {
            title: "Stage Nacional",
            description: "Competencia de alto nivel donde nuestras alumnas demuestran su técnica y talento frente a jurados expertos.",
            location: "Ciudad de Guatemala",
            image: "/imagenes/PRESENTACIONES/Pais de las maravillas.jpg"
        },
        {
            title: "Stage Internacional",
            description: "Oportunidad única de crecimiento artístico, compitiendo y aprendiendo en escenarios internacionales.",
            location: "Internacional",
            image: "/imagenes/premiacion eli.jpg"
        },
        {
            title: "Clausura: El Bosque Encantado",
            description: "Nuestra gran presentación anual donde todas las alumnas brillan en el escenario.",
            location: "Teatro de IGA",
            image: "/imagenes/PRESENTACIONES/Bosque.jpg"
        },
        {
            title: "Clausura: El Cascanueces",
            description: "La magia de la navidad cobra vida a través de la danza en esta clásica puesta en escena.",
            location: "Teatro de IGA",
            image: "/imagenes/PRESENTACIONES/Muñecas.jpg"
        },
        {
            title: "Clausura: Alicia en el País de las Maravillas",
            description: "Un viaje fantástico lleno de color, personajes inolvidables y mucha danza.",
            location: "Teatro de IGA",
            image: "/imagenes/PRESENTACIONES/Pais de las maravillas.jpg"
        },
        {
            title: "Clausura: Coppélia",
            description: "Una divertida y encantadora historia de muñecas que cobran vida.",
            location: "Teatro de IGA",
            image: "/imagenes/PRESENTACIONES/Bosque.jpg"
        }
    ]

    return (
        <section id="eventos" className="section" style={{ background: '#f8f9fa' }}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Nuestros Eventos</h2>
                    <p className="section-subtitle">Descubre nuestras presentaciones y eventos especiales</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            className="event-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}
                        >
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                />
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#5c1b3c' }}>{event.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>{event.description}</p>
                                <p style={{ fontSize: '0.85rem', color: '#888', fontWeight: '500' }}>📍 {event.location}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Events
