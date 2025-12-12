import { motion } from 'framer-motion'
import { MapPin, Phone, MessageCircle, Map } from 'lucide-react'
import { FaWaze, FaGoogle } from 'react-icons/fa'

const Locations = () => {
    const whatsappNumber = '+50247712837'

    const locations = [
        {
            title: "Avenida Elena",
            image: "/imagenes/ubicacionz1.jpg",
            address: "Avenida Elena, Zona 1",
            features: [
                "Clases plan fin de semana",
                "Clases de ETID y Ballet"
            ],
            phone: "4771 2837",
            wazeLink: "https://ul.waze.com/ul?ll=14.64670405%2C-90.52149653&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
            mapsLink: "https://maps.app.goo.gl/4PNDcBGXpvUaPqYU7"
        },
        {
            title: "Arkadia",
            image: "/imagenes/ubicacionz15.jpg",
            address: "Centro Comercial Arkadia, Zona 10",
            features: [
                "Clases plan entre semana y fin de semana",
                "Clases de ballet, contemporáneo y jazz para todas las edades"
            ],
            phone: "4771 2837",
            wazeLink: "https://www.waze.com/es/live-map/directions/arkadia-shopping-mall-bulevar-los-proceres-2621-zona-10,-guatemala?to=place.w.176619666.1766262194.7180354",
            mapsLink: "https://www.google.com/maps/place/Arkadia+Shopping+Mall/@14.5799819,-90.4958602,17z/data=!3m1!4b1!4m6!3m5!1s0x8589a39b9db4f0e3:0x93fb9aa9f9d920ba!8m2!3d14.5799767!4d-90.4932853!16s%2Fg%2F11b5yywxmb?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
        }
    ]

    return (
        <section id="ubicaciones" className="section" style={{ background: 'white' }}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Nuestras Ubicaciones</h2>
                    <p className="section-subtitle">Encuentra la ubicación más conveniente para ti</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {locations.map((location, index) => (
                        <motion.div
                            key={index}
                            className="location-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            style={{ background: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.08)', border: '1px solid #eee', display: 'flex', flexDirection: 'column' }}
                        >
                            {/* Card Image Area - Links to Maps by default */}
                            <a
                                href={location.mapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none', color: 'inherit', display: 'block', position: 'relative', height: '250px', overflow: 'hidden' }}
                            >
                                <img
                                    src={location.image}
                                    alt={location.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: '1rem',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                                    color: 'white'
                                }}>
                                    <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{location.title}</h3>
                                </div>
                            </a>

                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#666' }}>
                                    <MapPin size={20} color="#5c1b3c" />
                                    <span>{location.address}</span>
                                </div>

                                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                                    {location.features.map((feature, i) => (
                                        <li key={i} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#555' }}>
                                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ad1457' }}></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {/* Navigation Buttons */}
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <a
                                            href={location.wazeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn"
                                            style={{
                                                flex: 1,
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                padding: '0.6rem',
                                                borderRadius: '8px',
                                                background: '#33ccff', // Waze blue-ish
                                                color: 'white',
                                                textDecoration: 'none',
                                                fontWeight: '600',
                                                fontSize: '0.9rem'
                                            }}
                                        >
                                            <FaWaze size={20} />
                                            Waze
                                        </a>
                                        <a
                                            href={location.mapsLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn"
                                            style={{
                                                flex: 1,
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                padding: '0.6rem',
                                                borderRadius: '8px',
                                                background: '#4285F4', // Google Maps blue
                                                color: 'white',
                                                textDecoration: 'none',
                                                fontWeight: '600',
                                                fontSize: '0.9rem'
                                            }}
                                        >
                                            <FaGoogle size={18} />
                                            Maps
                                        </a>
                                    </div>

                                    {/* Contact Button */}
                                    <a
                                        href={`https://wa.me/${whatsappNumber}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            padding: '0.8rem',
                                            borderRadius: '8px',
                                            background: '#5c1b3c',
                                            color: 'white',
                                            textDecoration: 'none',
                                            fontWeight: '500'
                                        }}
                                    >
                                        <MessageCircle size={18} />
                                        Contactar
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Locations
