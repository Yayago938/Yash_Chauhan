import { useState } from 'react'

import './App.css'
import { Route,Routes } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import PostDetails from './pages/PostDetails'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Discoverpeople from './pages/Discoverpeople'
import ProtectedRoute from './components/ProtectedRoute'
import AuthStateWatcher from './components/AuthStateWatcher'

function App() {


  return (
    <>
    <AuthStateWatcher />
      <Routes>
        <Route path="/" element={<Landingpage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Signup/>}></Route>
       
        <Route element={<ProtectedRoute />}>
  <Route path="/home" element={<Home />} />
  <Route path="/me" element={<Profile />} />
  <Route path="/connect" element={<Discoverpeople />} />
   <Route path="/post/:id" element={<PostDetails/>}></Route>
</Route>

      </Routes>
    </>
  )
}

export default App
