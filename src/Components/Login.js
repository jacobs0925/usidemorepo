import { useState } from 'react';
import { loginUser } from '../Services/Auth';

const LoginModal = ({ onClose, onSuccess }) =>
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        try
        {
            const user = await loginUser(email, password);
            const token = await user.getIdTokenResult();

            if (token.claims.usiinstructoradmin)
            {
                onSuccess();
                setError('')
                onClose()
            }
            else
            {
                setError('You do not have permission to access the system.');
            }
        } catch (err)
        {
            setError(err.message);
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
        }}>
            <form onSubmit={handleSubmit} style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '5px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <h2>Login</h2>
                <input type="text" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
                {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
                <button type="button" onClick={onClose} style={{ marginTop: '10px' }}>Close</button>
            </form>
        </div>
    );
};

export default LoginModal;
