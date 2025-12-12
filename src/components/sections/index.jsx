// Placeholder components - to be fully implemented

export const WhatIsBallet = () => (
    <section id="que-es-ballet" className="section" style={{ background: 'white' }}>
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">¿Qué es el Ballet?</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                <div>
                    <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', color: '#555' }}>
                        El Ballet es una disciplina artística que combina técnica, precisión y sensibilidad para formar bailarines integros. Reconocido por su elegancia y exigencia, el ballet desarrolla fuerza, flexibilidad, coordinación y postura, al mismo tiempo que fomenta la creatividad y la expresión personal.
                    </p>
                    <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', color: '#555' }}>
                        Cuando llega el momento de las presentaciones, el cuerpo se transforma en un instrumento de expresión y el escenario se convierte en el lugar donde el trabajo, la dedicación y los sueños se manifiestan.
                    </p>
                    <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', color: '#555' }}>
                        En Elidanza, el ballet se enseña como un proceso formativo que impulsa la disciplina, la constancia y el amor por el arte. Cada clase está diseñada para fortalecer las bases técnicas, estimular el potencial artístico y construir confianza en cada bailarina.
                    </p>
                    <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', color: '#555' }}>
                        Elidanza brinda oportunidades tanto nacionales como internacionales para que las bailarinas continúen creciendo y mostrando su talento, entre ellas se encuentra la participación en competencias reconocidas como Stage, donde las alumnas tienen la posibilidad de presentarse, aprender y vivir experiencias que enriquecen su formación artística.
                    </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                    <img src="/imagenes/primersalon.jpg" alt="Clase de Ballet" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '15px', gridColumn: '1 / -1' }} />
                    <img src="/imagenes/premiacion eli.jpg" alt="Premiación" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '15px' }} />
                    <img src="/imagenes/Directora.jpg" alt="Directora" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '15px' }} />
                </div>
            </div>
        </div>
    </section>
)

export const Events = () => (
    <section id="eventos" className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Nuestros Eventos</h2>
                <p className="section-subtitle">Descubre nuestras presentaciones y eventos especiales</p>
            </div>
            <p style={{ textAlign: 'center', color: '#666' }}>Sección de eventos - Implementar carousel con 3 eventos</p>
        </div>
    </section>
)

export const Classes = () => (
    <section id="clases" className="section" style={{ background: 'white' }}>
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Nuestras Clases</h2>
                <p className="section-subtitle">Descubre nuestras especialidades en danza para todas las edades</p>
            </div>
            <p style={{ textAlign: 'center', color: '#666' }}>Sección de clases - 7 presenciales + 1 virtual</p>
        </div>
    </section>
)

export const Benefits = () => (
    <section id="beneficios" className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Beneficios de la Danza</h2>
                <p className="section-subtitle">Descubre cómo la danza transforma tu cuerpo y mente</p>
            </div>
            <p style={{ textAlign: 'center', color: '#666' }}>Sección de beneficios interactivos - 6 tarjetas con onClick</p>
        </div>
    </section>
)

export const Locations = () => (
    <section id="ubicaciones" className="section" style={{ background: 'white' }}>
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Nuestras Ubicaciones</h2>
                <p className="section-subtitle">Encuentra la ubicación más conveniente para ti</p>
            </div>
            <p style={{ textAlign: 'center', color: '#666' }}>Sección de ubicaciones - 2 tarjetas (Avenida Elena y Arkadia)</p>
        </div>
    </section>
)

export const Contact = () => (
    <section id="contacto" className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Contáctanos</h2>
                <p className="section-subtitle">Será un gusto que formes parte de Elidanza.</p>
            </div>
            <p style={{ textAlign: 'center', color: '#666' }}>Sección de contacto - Formulario sin campo mensaje</p>
        </div>
    </section>
)
