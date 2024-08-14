import { saveStatus } from '../utils/storage';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const clearData = window.confirm('Do you want to clear data from local storage?');
    if (clearData) {
      localStorage.clear();
    }
    saveStatus('1');
    navigate('/');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
