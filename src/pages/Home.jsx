import React from 'react'
import { Link } from 'react-scroll'

export default function Home() {
  return (
    <div className='h-screen bg-slate-900 text-center mt-10 text-white'>
      <p className='text-lg mt-20 mb-8 text-cyan-500'>HELLO THERE I'M</p>
      <h1 className='text-7xl'>
        <span style={{
          WebkitTextFillColor: 'transparent',
          WebkitBackgroundClip: 'text',
          backgroundImage: 'linear-gradient(to right, cyan, teal)'
        }}>D.Armando</span>
      </h1>
      <h2 className='text-4xl font-extralight mt-4'>
        <span style={{
          WebkitTextFillColor: 'transparent',
          WebkitBackgroundClip: 'text',
          backgroundImage: 'linear-gradient(to right, cyan, teal)'
        }}>
          Web Developer
        </span>
      </h2>

      <p className='text-2xl mt-5 font-extralight'>Desenvolvedor web apaixonado por criar soluções</p>

      <button className='mt-10 border rounded-full px-10 py-5 bg-cyan-900 cursor-pointer transition transform duration-200 hover:scale-110'>
        <Link to='contact' smooth={true} duration={500} className='w-full h-full'>contact me</Link>
      </button>
    </div>
  )
}
