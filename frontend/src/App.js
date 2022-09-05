import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Home/Header'
import Posts from './components/Home/Posts'
import SinglePost from './components/SinglePost'
import Write from './components/Write'
import Settings from './components/Settings'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import {Route, Routes} from 'react-router-dom'
//import Footer from './Footer'
import { Context } from './context/Context'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const { user } =useContext(Context);
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/register' element={ user ?<Home /> : <Register />} />
      <Route path='/login' element={ user ?<Home /> : <Login />} />
      <Route path='/write' element={user ?<Write />: <Register />} />
      <Route path='/setting' element={user ?<Settings />: <Register />} />
      <Route path='/post/:postId' element={<SinglePost />} />
    </Routes>
    {/* <Footer /> */}
    </>
  )
}

export default App