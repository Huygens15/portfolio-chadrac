'use client'
import React from 'react'
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-[#111111] px-16 py-12">

      <motion.div className="flex items-start justify-between gap-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      >

        {/* Colonne 1 — Logo + description */}
        <div className="flex flex-col gap-4 w-1/3">
          <h2 className="text-white text-2xl font-bold">
            CHADRAC NDAMBA<span className="text-yellow-400">.</span>
          </h2>
          <p className="text-gray-400">
            Telecommunications and Networks Engineer, <br />A self-taught apprentice in web and mobile development.
          </p>
          {/* Réseaux sociaux */}
          <div className="flex gap-4 mt-2">
            <a href="#" className="w-10 h-10 border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="w-10 h-10 border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition">
              <FaGithub />
            </a>
            <a href="#" className="w-10 h-10 border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Colonne 2 — Navigation */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-lg font-bold uppercase tracking-widest">Navigation</h4>
          <nav className="flex flex-col gap-3">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition uppercase text-sm tracking-wider">Home</a>
            <a href="#about" className="text-gray-400 hover:text-yellow-400 transition uppercase text-sm tracking-wider">About Me</a>
            <a href="#parcours" className="text-gray-400 hover:text-yellow-400 transition uppercase text-sm tracking-wider">Academic Background</a>
            <a href="#projects" className="text-gray-400 hover:text-yellow-400 transition uppercase text-sm tracking-wider">Projects</a>
            <a href="#experience" className="text-gray-400 hover:text-yellow-400 transition uppercase text-sm tracking-wider">Experiences</a>
            <a href="#contact" className="text-gray-400 hover:text-yellow-400 transition uppercase text-sm tracking-wider">Contact</a>
          </nav>
        </div>

        {/* Colonne 3 — Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-lg font-bold uppercase tracking-widest">Contact</h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center shrink-0">
                <span className="text-black text-sm"><MdEmail className="text-black text-xl" /></span>
              </div>
              <p className="text-gray-400 text-sm">chadracncdamba@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center shrink-0">
                <span className="text-black text-sm"><MdLocationOn className="text-black text-xl" /></span>
              </div>
              <p className="text-gray-400 text-sm">Congo - Brazzaville</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center shrink-0">
                <span className="text-black text-sm"><MdPhone className="text-black text-xl" /></span>
              </div>
              <p className="text-gray-400 text-sm">+242 06 921 7447 / 05 578 9780</p>
            </div>
          </div>
        </div>

      </motion.div>

      {/* Ligne de séparation + copyright */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex items-center justify-between">
        <p className="text-gray-500 text-sm">
          © 2026 Chadrac Ndamba. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm">
          Developped with <span className="text-yellow-400">Next.js</span> & <span className="text-yellow-400">Tailwind CSS</span>
        </p>
      </div>

    </footer>
  )
}

export default Footer