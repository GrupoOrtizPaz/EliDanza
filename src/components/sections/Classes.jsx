import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const Classes = () => {
    const whatsappNumber = '+50247712837'

    const classes = [
        { title: "ETID (programa exclusivo)", image: "/imagenes/primersalon.jpg" },
        { title: "Programa para colegios", image: "/imagenes/primersalon.jpg" },
        { title: "Baby Ballet", image: "/imagenes/primersalon.jpg" },
        { title: "Ballet Principiantes", image: "/imagenes/primersalon.jpg" },
        { title: "Ballet Adolescentes y Adultos", image: "/imagenes/primersalon.jpg" },
        { title: "Contemporáneo", image: "/imagenes/primersalon.jpg" },
        { title: "Jazz", image: "/imagenes/primersalon.jpg" }
    ]

    const virtualClass = { title: "Ballet Principiantes", image: "/imagenes/enlinea.jpg" }

    return (
        <section id="clases" className="section" style={{ background: 'white' }}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Nuestras Clases</h2>
                    <p className="section-subtitle">Descubre nuestras especialidades en danza para todas las edades</p>
                </div>

                <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: '#5c1b3c' }}>Clases Presenciales</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                    {classes.map((item, index) => (
                        <motion.div
                            key={index}
                            className="class-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ background: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.08)', border: '1px solid #eee' }}
                        >
                            <div style={{ height: '180px', overflow: 'hidden' }}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#333' }}>{item.title}</h4>
                                <a
                                    href={`https://wa.me/${whatsappNumber}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '0.5rem 1.5rem',
                                        background: '#5c1b3c',
                                        color: 'white',
                                        borderRadius: '25px',
                                        textDecoration: 'none',
                                        fontSize: '0.9rem',
                                        fontWeight: '500'
                                    }}
                                >
                                    <MessageCircle size={16} />
                                    Inscríbete
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: '#5c1b3c' }}>Clases Virtuales</h3>
                <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                    <motion.div
                        className="class-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ background: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.08)', border: '1px solid #eee' }}
                    >
                        <div style={{ height: '200px', overflow: 'hidden' }}>
                            <img
                                src={virtualClass.image}
                                alt={virtualClass.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#333' }}>{virtualClass.title}</h4>
                            <a
                                href={`https://wa.me/${whatsappNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.5rem 1.5rem',
                                    background: '#5c1b3c',
                                    color: 'white',
                                    borderRadius: '25px',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    fontWeight: '500'
                                }}
                            >
                                <MessageCircle size={16} />
                                Inscríbete
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Classes
