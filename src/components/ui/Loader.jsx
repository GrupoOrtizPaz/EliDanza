import { motion } from 'framer-motion'

const Loader = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem'
                }}
            >
                <div style={{
                    width: '60px',
                    height: '60px',
                    border: '4px solid #fce4ec',
                    borderTop: '4px solid #ad1457',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                }} />
                <style>
                    {`
                        @keyframes spin {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                    `}
                </style>
                <h2 style={{
                    color: '#5c1b3c',
                    fontFamily: 'Montserrat, sans-serif',
                    letterSpacing: '0.1em',
                    fontSize: '1.2rem'
                }}>
                    ELIDANZA
                </h2>
            </motion.div>
        </div>
    )
}

export default Loader
