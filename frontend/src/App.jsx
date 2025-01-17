import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {

  return (
    <>
      <Header />
      <Routes >
        <Route path='' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='' element={<Profile />} /> */}
      </Routes>
      {/* <Home /> */}
    </>
  )
}

export default App
