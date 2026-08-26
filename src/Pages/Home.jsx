import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-screen w-full'>
      <nav className='w-full flex items-center justify-between px-8 py-4 bg-white shadow-md'>
        <div className='font-bold text-xl text-gray-800'>MyApp</div>
        <ul className='flex gap-6'>
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/sphare" className="text-gray-700 hover:text-blue-600 transition-colors">Sphare</Link>
          <Link to="/watch" className="text-gray-700 hover:text-blue-600 transition-colors">Watch</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Home