import { Phone, Instagram, Facebook } from 'lucide-react'
import { FaTiktok } from 'react-icons/fa'
import './TopBanner.css'

const TopBanner = () => {
    const whatsappNumber = '+50247712837'

    return (
        <div className="top-banner">
            <div className="banner-content">
                <div className="banner-left">
                    <span className="banner-text">Estudio de Danza</span>
                </div>
                <div className="banner-right">
                    <a
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="banner-link"
                    >
                        <Phone size={14} />
                        <span className="banner-text">+502 4771 2837</span>
                    </a>
                    <a
                        href="https://www.instagram.com/elidanza.gt/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="banner-link"
                    >
                        <Instagram size={14} />
                        <span className="banner-text">elidanza.gt</span>
                    </a>
                    <a
                        href="https://www.tiktok.com/@elidanza.gt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="banner-link"
                    >
                        <FaTiktok size={14} />
                        <span className="banner-text">elidanza.gt</span>
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=100088985354932"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="banner-link"
                    >
                        <Facebook size={14} />
                        <span className="banner-text">Elidanza</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TopBanner
