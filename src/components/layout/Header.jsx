import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import './Header.css'

const Header = ({ scrolled }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navItems = [
        { label: 'Inicio', href: '#inicio' },
        { label: '¿Qué es el Ballet?', href: '#que-es-ballet' },
        { label: 'Eventos', href: '#eventos' },
        { label: 'Clases', href: '#clases' },
        { label: 'Beneficios', href: '#beneficios' },
        { label: 'Ubicaciones', href: '#ubicaciones' },
        { label: 'Contacto', href: '#contacto' },
    ]

    const handleNavClick = (e, href) => {
        e.preventDefault()
        setMobileMenuOpen(false)
        const element = document.querySelector(href)
        if (element) {
            const offset = 120
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <nav className="navbar">
                <div className="nav-container">
                    <a href="#top" className="nav-logo" onClick={(e) => handleNavClick(e, '#top')}>
                        <img src="/imagenes/PRUEBA DE LOGO.svg" alt="Elidanza Logo" />
                    </a>

                    <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                        {navItems.map((item) => (
                            <li key={item.href} className="nav-item">
                                <a
                                    href={item.href}
                                    className="nav-link"
                                    onClick={(e) => handleNavClick(e, item.href)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="hamburger"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header
