// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram,FaGithub } from 'react-icons/fa'; // Você pode usar a biblioteca react-icons para os ícones

const Footer = () => {
  return (
    <footer className="text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">

          {/* Links de redes sociais */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
            <h5 className="text-lg font-semibold mb-4">Siga-me</h5>
            <div className="flex space-x-4 justify-center items-center">
              <a href="https://www.facebook.com/delcio_lirio" target='blank' className="text-gray-400 hover:text-white" aria-label="Facebook">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://x.com/Delcio1976" target="blank" className="text-gray-400 hover:text-white" aria-label="Twitter">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/delcio_lirio/" target='blank' className="text-gray-400 hover:text-white" aria-label="Instagram">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://github.com/DelcioCoder/" target="blank" className="text-gray-400 hover:text-white" aria-label="Github">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>

            <p className="text-center md:text-right text-gray-400 text-sm mt-5">
              &copy; 2024 Designed e Built by <span className='text-green-400'>Delcio Coder</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
