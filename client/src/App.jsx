import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import {Footer} from "./components"
import {Favorite, Home, MovieDetails, Movies, MyBookings, SeatLayout} from "./pages"
import {Toaster} from "react-hot-toast"


function App() {
  const isAdminRoute = useLocation().pathname.startsWith("/admin")
  return (
    <>
      <Toaster/>
      {!isAdminRoute && <Navbar />}
      
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/movies/:id' element={<MovieDetails/>}/>
          <Route path='/movies/:id/:date' element={<SeatLayout/>}/>
          <Route path='/my-bookings' element={<MyBookings/>}/>
          <Route path='/favorite' element={<Favorite/>}/>
      </Routes>

      {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App