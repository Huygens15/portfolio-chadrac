'use client'
import React, {useState, useEffect} from 'react';
import  Link from 'next/link';

const Header = () => {

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect( () => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-16 py-3 ${
    scrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg ' : 'bg-transparent'}`}>

        <div className="flex items-center justify-between ">
            <Link href="/" className="text-white text-2xl font-bold tracking-widest">
                CHADRAC NDAMBA<span className="text-yellow-400">.</span>
            </Link>

            {/* ma barre de navigation pour l'ordi*/}
            <nav className="hidden md:flex gap-8">
                <a href="#" className="text-gray-300 hover:text-yellow-400">Home</a>
                <a href="#about" className="text-gray-300 hover:text-yellow-400">About me</a>
                <a href="#parcours" className="text-gray-300 hover:text-yellow-400">Academic Background</a>
                <a href="#projects" className="text-gray-300 hover:text-yellow-400">Projects</a>
                <a href="#experience" className="text-gray-300 hover:text-yellow-400">Experiences</a>
                <a href="#contact" className="text-gray-300 hover:text-yellow-400">Contact</a>
            </nav>

            {/* Bouton burger pour mobile */}
            <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? '✕' : '☰'}
            </button>
        </div>

        {/* Menu mobile - visible seulement si menuOpen est true */}
        {menuOpen && (
        <nav className="flex flex-col gap-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-yellow-400">Home</a>
            <a href="#about" className="text-gray-300 hover:text-yellow-400">About me</a>
            <a href="#parcours" className="text-gray-300 hover:text-yellow-400">Academic backgruond</a>
            <a href="#projects" className="text-gray-300 hover:text-yellow-400">Projects</a>
            <a href="#blog" className="text-gray-300 hover:text-yellow-400">Experiences</a>
            <a href="#contact" className="text-gray-300 hover:text-yellow-400">Contact</a>
        </nav>
      )}

    </header>
  )
}

export default Header
