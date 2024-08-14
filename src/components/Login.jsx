import  { useState } from 'react';
import { getUsers } from '../utils/storage';
import { useNavigate } from 'react-router-dom';
import "./Login.css"
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = getUsers();
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      alert('Login successful!');
      navigate('/users');
    } else {
      alert('Invalid username or password');
    }
  };
  const handleRegister = () => {
    navigate('/register');  
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button className='button' type="submit">Login</button>
      <button className='button' onClick={handleRegister}>Register</button>
    </form>
  );
};

export default LoginPage;
