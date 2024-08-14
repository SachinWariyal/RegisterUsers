export const getUsers = () => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  };
  
  export const saveUsers = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
  };
  
  export const getStatus = () => {
    return localStorage.getItem('status') || '0';
  };
  
  export const saveStatus = (status) => {
    localStorage.setItem('status', status);
  };
  