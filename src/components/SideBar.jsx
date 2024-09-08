import React from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

// Variantes para o container e os itens
const container = {
    hidden: {
        x: '-100%', opacity: 0, transition: { duration: 0.5 }
    }, // Escondido fora da tela à esquerda
    visible: {
        x: '0%', // Desliza para a posição correta
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    },
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

export default function SideBar({ showMenu, setShowMenu }) {
    return (
        <>
            <AnimatePresence> {/* Mantenha o AnimatePresence fora do condicional */}
                {showMenu && (
                    <motion.div
                        className='fixed top-0 left-0 h-full w-[250px] flex flex-col  items-center  text-white font-bold bg-slate-900 space-y-6 py-4 z-1000  sidebar md:hidden'
                    >

                        <motion.ul
                            initial="hidden"
                            animate="visible"
                            exit="hidden" // Para quando fechar o sidebar
                            variants={container}
                            className="space-y-4"
                        >
                            <motion.li variants={item} className='mt-20'>
                                <Link to='home'
                                    smooth={true}
                                    duration={600}
                                    className='cursor-pointer transition hover:opacity-80 font-extralight text-2xl'
                                    onClick={() => setShowMenu(false)}
                                >
                                    Home
                                </Link>
                            </motion.li>

                            <motion.li variants={item}>
                                <Link to='about'
                                    smooth={true}
                                    duration={600}
                                    className='cursor-pointer transition hover:opacity-80 font-extralight text-2xl'
                                    onClick={() => setShowMenu(false)}
                                >
                                    About
                                </Link>
                            </motion.li>

                            <motion.li variants={item}>
                                <Link to='portfolio'
                                    smooth={true}
                                    duration={600}
                                    className="cursor-pointer transition hover:opacity-80 font-extralight text-2xl"
                                    onClick={() => setShowMenu(false)}
                                >
                                    Portfolio
                                </Link>
                            </motion.li>

                            <motion.li variants={item}>
                                <Link to='contact'
                                    smooth={true}
                                    duration={600}
                                    className='cursor-pointer transition hover:opacity-80 font-extralight text-2xl'
                                    onClick={() => setShowMenu(false)}
                                >
                                    Contact
                                </Link>
                            </motion.li>
                        </motion.ul>

                    </motion.div>

                )}
            </AnimatePresence>
        </>
    );
}
