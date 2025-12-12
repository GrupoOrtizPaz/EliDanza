import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin } from 'lucide-react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Construct WhatsApp message
        const message = `Hola, mi nombre es ${formData.name}. Me gustaría recibir más información. Mi teléfono es ${formData.phone} y correo ${formData.email}.`
        const whatsappUrl = `https://wa.me/50247712837?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, '_blank')
    }

    return (
        <section id="contacto" className="section" style={{ background: '#f8f9fa' }}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Contáctanos</h2>
                    <p className="section-subtitle">Será un gusto que formes parte de Elidanza.</p>
                </div>

                <div className="contact-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#5c1b3c' }}>Información de Contacto</h3>
                            <p style={{ color: '#666', marginBottom: '2rem' }}>
                                Estamos listos para resolver tus dudas y ayudarte a dar el primer paso en el mundo de la danza.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ background: '#fce4ec', padding: '0.8rem', borderRadius: '50%', color: '#ad1457' }}>
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: '600', color: '#333' }}>Teléfono</p>
                                        <a href="tel:+50247712837" style={{ color: '#666', textDecoration: 'none' }}>+502 4771 2837</a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ background: '#fce4ec', padding: '0.8rem', borderRadius: '50%', color: '#ad1457' }}>
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: '600', color: '#333' }}>Email</p>
                                        <a href="mailto:info@elidanza.gt" style={{ color: '#666', textDecoration: 'none' }}>info@elidanza.gt</a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ background: '#fce4ec', padding: '0.8rem', borderRadius: '50%', color: '#ad1457' }}>
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: '600', color: '#333' }}>Ubicación</p>
                                        <p style={{ color: '#666' }}>Ciudad de Guatemala</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ background: 'white', padding: '2.5rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
                    >
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '500' }}>Nombre Completo</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #eee', background: '#f9f9f9' }}
                                placeholder="Tu nombre"
                            />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '500' }}>Correo Electrónico</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #eee', background: '#f9f9f9' }}
                                placeholder="tucorreo@ejemplo.com"
                            />
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '500' }}>Teléfono</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #eee', background: '#f9f9f9' }}
                                placeholder="Tu número de teléfono"
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
                        >
                            <Send size={18} />
                            Enviar Mensaje
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}

export default Contact
