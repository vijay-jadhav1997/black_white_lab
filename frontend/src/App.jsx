import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Footer from './components/Footer'
import { useState } from 'react'
// import About from './components/About'

function App() {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes >
        <Route path='' element={<Home isLogin={isLogin} />} />
        {/* <Route path='/about' element={<About />} /> */}
        {/* <Route path='/contact-us' element={<ContactUs />} /> */}
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login setIsLogin={setIsLogin} />} />
        {/* <Route path='' element={<Profile />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
