'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-16"
      style={{ background: "url('/images/banner_bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Animation des particules */}


      <div className="w-full flex items-center justify-between gap-10">

        {/* Colonne gauche — Image */}
        <motion.div className="w-1/2 flex items-end justify-center " initial={{ opacity: 0, x: -80}} animate={{ opacity: 1, x: 0}} transition={{ duration: 0.8, ease: 'easeOut'}} >
          <img
            src="/images/banner_img.png"
            alt="Chadrac Ndamba"
            className="w-3/4 h-auto object-contain"
          />
        </motion.div>

        {/* Colonne droite — Texte */}
        <div className="w-1/2 flex flex-col gap-6">
          <motion.h3 className="text-yellow-400 text-xl font-semibold" initial={{ opacity: 0, y: 30}} animate={{ opacity: 1, y: 0}} transition={{ duration: 0.6, delay: 0.2}}>Hello ! I'm Chadrac,</motion.h3>
          <motion.h1 className="text-white text-4xl font-bold uppercase leading-tight" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
            Telecommunications and Networks Engineer <br />(In Training).
          </motion.h1>
          <motion.p className="text-gray-300 text-lg" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
            With a passion for technology, I combine web and mobile development
            with networking and telecommunications to offer unique and limitless expertise.
          </motion.p>
          <motion.div className="flex gap-4 mt-2" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
            <a href="#" className="bg-yellow-400 border-2 border-yellow-400  rounded-2xl  text-black px-6 py-3 font-bold hover:bg-black hover:text-yellow-400 transition flex items-center gap-2">
              Download my CV
            </a>
            <a href="#about" className="border-2 border-white  rounded-2xl text-white px-6 py-3 font-bold uppercase hover:bg-white hover:text-black transition flex items-center gap-2">
              Know more about me
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Hero