import emailjs from '@emailjs/browser';

export default function Component() {

    const sendYesEmail = () => {
        emailjs.send(
            'service_ieit149',
            'template_mw9ww0l',
            { respuesta: 'Sí' },
            'V6evrcs9MS73SyDeO'
        );
    };

    const handleNoClick = () => {
        window.location.href = 'https://youtu.be/b3rNUhDqciM?si=edr13ha5gs9b7R-F';
    };

    return (
        <div style={styles.container}>
            <div style={styles.buttons}>
                <button
                    onClick={sendYesEmail}
                    style={styles.yes}
                >
                    Sí
                </button>

                <button
                    onClick={handleNoClick}
                    style={styles.no}
                >
                    No
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // centra horizontalmente
        gap: '20px',          // espacio entre texto y botones
    },
    buttons: {
        display: 'flex',
        gap: '20px',           // espacio entre los botones
        justifyContent: 'center', // centra los botones juntos
    },
    yes: {
        padding: '16px 36px',  // más grande
        borderRadius: '12px',
        border: 'none',
        backgroundColor: '#22c55e',
        color: '#ffffff',
        fontSize: '1.25rem',   // texto más grande
        fontWeight: '700',
        cursor: 'pointer',
        boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
    },
    no: {
        padding: '16px 36px',  // más grande
        borderRadius: '12px',
        border: 'none',
        backgroundColor: '#ef4444',
        color: '#ffffff',
        fontSize: '1.25rem',
        fontWeight: '700',
        cursor: 'pointer',
        boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
    },
};
