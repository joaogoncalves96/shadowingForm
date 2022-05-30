import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UseUserState from '../../routes/UseUserState';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [sucess, setSucess] = useState('');
    const UserState = UseUserState();

    function handleSubmit(event) {
        event.preventDefault(username, password);
        if(username === 'user' && password === 'pass') {
            setSucess('Logged in'); 
            UserState.handleLoginChange(true);
            navigate('/list');
        } else {
            setError('Invalid credentials');
        }
    }

    return (
        <div>
        <h1>Login</h1>
        <form>
            <input value={username} placeholder='Username' type="text" onChange={(e) => setUsername(e.target.value)} />
            <input value={password} placeholder='Password' type="password" onChange={(e) => setPassword(e.target.value)} />
            <button type='button' onClick={handleSubmit}>Login</button>
            {error && <p>{error}</p>}
            {sucess && <p>{sucess}</p>}
        </form>
        </div>
    );
}
export default Login;