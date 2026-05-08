'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Particles, { initParticlesEngine} from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'


const Hero = () => {
  
  const [init, setInit] = useState(false)
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setInit(true))
  }, [])



  return (
    <section
      id="home"
      // className="min-h-screen flex items-center px-16"
      className="min-h-screen flex items-center px-6 md:px-16 relative overflow-hidden bg-black"
      // style={{ background: "url('/images/banner_bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >

      {/* Particules en arrière plan */}
      { init && (
        <Particles
        id="tsparticles"
        className="absolute inset-0 z-0"
        options={{
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          particles: {
            color: { value: '#facc15' },
            links: {
              color: '#facc15',
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
            },
            number: {
              value: 60,
              density: { enable: true, value_area : 800},
            },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,}}
        />
      )}

      <div 
      // className="w-full flex items-center justify-between gap-10"
      className="w-full flex flex-col-reverse md:flex-row items-center gap-10 relative z-10"  
      >

        {/* Colonne gauche — Image */}
        <motion.div 
        // className="w-1/2 flex items-end justify-center " initial={{ opacity: 0, x: -80}} animate={{ opacity: 1, x: 0}} transition={{ duration: 0.8, ease: 'easeOut'}} 
        className="w-full md:w-1/2 flex items-end justify-center" initial={{ opacity: 0, x: -80}} animate={{ opacity: 1, x: 0}} transition={{ duration: 1.5, ease: 'easeOut'}}
        >
          <img
            src="/images/chad.jpg"
            alt="Chadrac Ndamba"
            // className="w-3/4 h-auto object-contain"
            className="w-1/2 md:w-3/4 h-auto object-contain rounded-full border-2 border-yellow-400"
          />
        </motion.div>

        {/* Colonne droite — Texte */}
        <div 
        // className="w-1/2 flex flex-col gap-6"
        className="w-full md:w-1/2 flex flex-col gap-6 pt-24 md:pt-0"
        >
          <motion.h3 className="text-yellow-400 text-xl font-semibold" initial={{ opacity: 0, y: 30}} animate={{ opacity: 1, y: 0}} transition={{ duration: 0.6, delay: 0.2}}>Hello ! I'm Chadrac,</motion.h3>
          <motion.h1 
          // className="text-white text-4xl font-bold uppercase leading-tight" 
          className="text-white text-2xl md:text-4xl font-bold uppercase leading-tight"
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.5, delay: 0.4 }}>
            Telecommunications and Networks Engineer <br />(In Training).
          </motion.h1>
          <motion.p className="text-gray-300 text-lg" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
            With a passion for technology, I combine web and mobile development
            with networking and telecommunications to offer unique and limitless expertise.
          </motion.p>
          <motion.div 
          // className="flex gap-4 mt-2" 
          className="flex flex-col sm:flex-row gap-4 mt-2"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
            <a href="#" className="bg-yellow-400 border-2 border-yellow-400  rounded-2xl  text-black px-6 py-3 font-bold hover:bg-black hover:text-yellow-400 transition flex items-center gap-2">
              Download my CV
            </a>
            <a href="#about" className="border-2 border-white  rounded-2xl text-white px-6 py-3 font-bold  hover:bg-white hover:text-black transition flex items-center gap-2">
              Know more about me
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Hero