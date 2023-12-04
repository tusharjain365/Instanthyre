import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Authentication/Login'
import SignUp from './components/Authentication/SignUp'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Activity from './components/Pages/Activity'
import Home from './components/Pages/Home'
import Opportunity from './components/Pages/Opportunity'
import Profile from './components/Pages/Profile'
import './index.css'
import { authStore } from './store/authStore'

function App() {

  const { setUser } = authStore(state => state);

  useEffect(() => {
    const curUser = localStorage.getItem("user");
    setUser(JSON.parse(curUser));
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/opportunities' element={<Opportunity />} />
        <Route path='/activity' element={<Activity />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
