import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/ui/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='max-w-7xl mx-auto' >
      <Navbar/>
      <main className='min-h-screen max-w-7xl mx-auto px-4 py-6'>
      <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
