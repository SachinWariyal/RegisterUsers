import { useNavigate } from 'react-router-dom';
import { getUsers } from '../utils/storage';
import './userList.css'
const UserList = () => {
  const navigate = useNavigate();
  const users = getUsers();

  const handleLogout = () => {
    const clearData = window.confirm('Do you want to clear user data from local storage?');
    if (clearData) {
      localStorage.removeItem('users');
    }
    navigate('/');
  };

  const handleEdit = () => {
    alert('Editing is not implemented as I was running out of time.');
  };

  const handleDelete = (username) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      const updatedUsers = users.filter(user => user.username !== username);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      alert('User deleted successfully!');
      navigate('/users');
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <button className='button'   onClick={handleLogout}>Logout</button>
      <ul>
        {users.map((user) => (
          <li key={user.username}>
            <span>{user.username} - {user.email}</span>
            <button className='button' onClick={handleEdit}>Edit</button>
            <button className='button' onClick={() => handleDelete(user.username)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
