import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Ads from './Ads'
import Layout from './Layout'
import Login from './Login'
import PostAd from './PostAd'
import Signup from './Signup'
import Sucess from './Sucess'

export default function Main() {
  let token = localStorage.getItem('access_token');
  let navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      navigate('/')
    }
    else {
      navigate("/ads");
    }
  }, [])

  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ads" element={<Ads />} />
          <Route path="/new" element={<PostAd />} />
          <Route path="/success" element={<Sucess />} />
        </Route>
      </Routes>
    </div>
  )
}
