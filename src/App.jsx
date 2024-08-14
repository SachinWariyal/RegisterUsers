import './App.css'
import LoginPage from './components/login';
import RegistrationPage from './components/RegistrationPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import Logout from './components/Logout';
function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage/>}></Route>
          <Route path='/register' element={<RegistrationPage/>}></Route>
          <Route path='/users' element={<UserList/>}></Route>
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
