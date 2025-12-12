import { Instagram, Facebook, MessageCircle, Mail, MapPin, Phone } from 'lucide-react'
import { FaTiktok } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    const whatsappNumber = '+50247712837'

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <img src="/imagenes/PRUEBA DE LOGO.svg" alt="Elidanza Logo" />
                        </div>
                        <p className="footer-description">
                            Estudio de Danza en la Ciudad de Guatemala. Formamos bailarines y creamos arte desde 2021.
                        </p>
                        <div className="footer-social">
                            <a href="https://www.instagram.com/elidanza.gt/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100088985354932" target="_blank" rel="noopener noreferrer" className="social-link">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.tiktok.com/@elidanza.gt" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaTiktok size={20} />
                            </a>
                            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="social-link">
                                <MessageCircle size={20} />
                            </a>
                            <a href="mailto:elidanzagt@gmail.com" className="social-link">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-title">Enlaces Rápidos</h3>
                        <ul className="footer-links">
                            <li><a href="#inicio">Inicio</a></li>
                            <li><a href="#eventos">Eventos</a></li>
                            <li><a href="#clases">Clases</a></li>
                            <li><a href="#beneficios">Beneficios</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-title">Contacto</h3>
                        <div className="footer-contact">
                            <p><Phone size={16} /> +502 4771 2837</p>
                            <p><Mail size={16} /> elidanzagt@gmail.com</p>
                            <p><MapPin size={16} /> Zona 10, Ciudad de Guatemala</p>
                        </div>
                        <div className="footer-cta">
                            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                <MessageCircle size={18} />
                                ¡Inscríbete Ahora!
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 Elidanza. Todos los derechos reservados.</p>
                    <div className="developer-credit">
                        <span>Desarrollado por <strong>Why Media</strong> - Desarrollo de Software</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
