
export const styles = {
    toolbar: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '50px',
        backgroundColor: '#2a2a40',
        color: '#f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        borderBottom: '1px solid #444',
        zIndex: 1000,
    },
    sidebar: {
        position: 'fixed',
        top: '50px',
        left: 0,
        width: '200px',
        height: 'calc(100vh - 50px)',
        backgroundColor: '#2e2e48',
        color: '#ddd',
        padding: '20px',
        borderRight: '1px solid #444'
    },
    content: {
        backgroundColor: '#1e1e2f',
        display: 'flex',

        alignItems: 'center',
        justifyContent: 'center',
        width: 'calc(100vw - 200px)',
        minHeight: '100vh',
        marginLeft: '200px',
        paddingTop: '80px',
        color: '#f0f0f0',
        gap: '20px',
    },
    card: {
        backgroundColor: '#2f2f49',
        padding: '15px',
        border: '1px solid #555',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
        width: '100%',
        maxWidth: '400px',
    },
    weatherCard: {
        color: '#fff', background: '#333', padding: '12px', borderRadius: '8px', height: "170px", margin: "40px 0 0 30px", width: '100%',
        maxWidth: '200px', textAlign: "center"
    },
    inputGroup: {
        display: 'flex',
        gap: '10px',
        width: '100%',
        maxWidth: '400px',
        marginBottom: '10px'
    },
    input: {
        flex: 1,
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #666',
        backgroundColor: '#252537',
        color: '#f0f0f0',
    },
    button: {
        padding: '10px 16px',
        backgroundColor: '#3a3a5c',
        color: '#f0f0f0',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export const navLinks = [
    { icon: '📊', label: 'Overview', href: '#' },
    { icon: '📈', label: 'Reports', href: '#' },
    { icon: '🔔', label: 'Notifications', href: '#' },
    { icon: '⚙️', label: 'Settings', href: '#' },
];