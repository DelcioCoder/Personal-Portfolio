import React from 'react'

export default function Contact() {
  return (
    <div className='h-screen bg-slate-900 text-center text-white'>
      <h1 className='text-5xl text-cyan-700 mt-56 mb-10'>Contact me</h1>
      <p className='font-extralight text-2xl'>Actualmente estou em busca de novas oportunidades e aberto para contribuições em projectos open source</p>

      <h2 className='text-2xl mt-10'>
        Mande-me um e-mail para<br />
        <span className="font-semibold text-green-900 underline-offset-0 cursor-pointer">
          <a href="mailto:armandodelcio40@gmail.com">armandodelcio40@gmail.com</a>
        </span>
      </h2>

    </div>
  )
}
