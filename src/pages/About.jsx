import React from 'react'

export default function About() {
  return (
    <div className='h-screen bg-slate-900 text-center text-white  md:flex md:flex-col justify-center items-center sm:justify-center sm:items-center'>
      <h1 className='text-5xl text-cyan-700'>Olá,</h1>
      <p className="text-2xl font-light mx-4 mb-4 text-justify leading-relaxed md:w-[700px] md:p-10 ">
        Eu sou um desenvolvedor web autodidata,apaixonado por tecnologia e em constante busca por aprendizado e inovação. Tenho experiência prática em 
        <span className="font-semibold"> Python (Django)</span>,
        <span className="font-semibold">HTML</span>,
        <span className="font-semibold">CSS</span>,
        <span className="font-semibold">Bootstrap</span><br />
        <span className="font-semibold">JavaScript</span> e
        <span className="font-semibold"> React.js</span>. Desenvolvo soluções que unem funcionalidade e design, sempre buscando oferecer a melhor experiência para o usuário.
      </p>



    </div>
  )
}
