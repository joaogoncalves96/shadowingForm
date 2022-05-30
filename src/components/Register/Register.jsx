import { useNavigate } from 'react-router-dom';

function Register() {

  const navigate = useNavigate();

    function handleSubmit(event) {
      event.preventDefault();
      navigate('/');

  }
  

  return (
    <div>
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
      <button type='button' onClick={handleSubmit}>Login</button>
    </div>
  );
}
export default Register;