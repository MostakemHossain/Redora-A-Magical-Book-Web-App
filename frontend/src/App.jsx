import React from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div >
      <h1>Hello</h1>
      <main className='min-h-screen max-w-7xl mx-auto px-4 py-6'>
      <Outlet/>
      </main>
      <h1>Hello</h1>
    </div>
  )
}

export default App