import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaVideo } from 'react-icons/fa6';

import { RiGitRepositoryPrivateFill } from "react-icons/ri";

const projects = [
  {
    id: 1,
    title: 'E-commerce',
    image: '/images/ecommerce.jpeg',
    description: 'Este é um e-commerce que desenvolvi usando o django framework,boostrap e conexão com o SGBD mysql',
    link: 'https://github.com/DelcioCoder/E-commerce-Django',
    icon: <FaGithub />
  },
  {
    id: 2,
    title: 'Weather-forecast',
    image: '/images/weather.png',
    description: 'Este é um  aplicativo de precisão de tempo que desenvolvi usando a biblioteca React js,css,axios para o consumo de api da open weather.',
    link: 'https://github.com/DelcioCoder/Weather-Forecast-App',
    icon: <FaGithub />
  },
  {
    id: 3,
    title: 'Learning log',
    image: '/images/learning.png',
    description: 'Esta é uma aplicação web completo de registro de aprendizado que desenvolvi com o django framework,MYSQL como SGBD,pude demonstrar uma forte habilidade em CRUD,em segurança e autenticação',
    link: 'https://github.com/DelcioCoder/Learning-Log',
    icon: <FaGithub />
  },

  {
    id: 4,
    title: 'Itunes api',
    image: '/images/itunes.png',
    description: 'Esta é uma aplicação web que desenvolvi usando o django framework,biblioteca requests do python para consumo de api do iTunes e implementei também segurança.',
    link: 'https://github.com/DelcioCoder/API-DRF',
    icon: <FaGithub />,
    video: <FaVideo />,
    video_link: '/video/itunevideo.mp4'
  },

  {
    id: 5,
    title:"workbrain",
    image: '/images/workbrain_picture.png',
    description: 'Esta, é uma aplicação web pessoal que me permite ter o máximo controle das actividades que tenho proposto a mim mesmo de forma mensal. Foi desenvolvida usando o Django, DRF(django rest framework) para construção da api, implementei segurança baseado em token JWT(json web token) e foi usado o React js para construção da interface do usuário.',
    link: 'Private repository.',
    icon: <RiGitRepositoryPrivateFill />
  }
];


export default function Portfolio({ showMenu }) {
  return (
    <motion.section
      className={`relative min-h-screen bg-slate-900 text-center text-white portfolio content ${showMenu ? 'ml-[250px]' : ''}`}>
      <h1 className='text-5xl text-cyan-700 mb-5 mt-10'>Meu portfólio</h1>
      <p className='mb-5 text-lg font-light'>
        Aqui estão alguns dos meus projetos, todos eles são open source, você pode contribuir no github.
      </p>

      <motion.div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full justify-items-center'>
        {projects.map(project => (
          <motion.div key={project.id} className='border h-100 rounded-lg p-4 shadow-md cursor-pointer mx-2'>
            <img src={project.image} alt={project.title} className='w-full h-48 object-cover transform transition duration-300 hover:scale-110' />
            <h2 className='text-2xl font-bold mt-2'>{project.title}</h2>
            <p className='text-sm'>{project.description}</p>
            <div className='mt-10 flex gap-8'>
              <a href={project.link} className='text-2xl cursor-pointer'>
                {project.icon}
              </a>

              {project.video && (
                <a href={project.video_link} target='blank' className='text-2xl cursor-pointer ml-2'>
                  {project.video}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
