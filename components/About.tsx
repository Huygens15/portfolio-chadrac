'use client'
import React from 'react'
import { motion } from 'framer-motion'


const About = () => {
  return (
    <section id="about" 
    // className="min-h-screen flex items-center px-16 py-20"
    className="min-h-screen flex items-center px-6 md:px-16 py-20"
    >

      <div 
      // className="w-full flex items-center gap-16"
      className="w-full flex flex-col md:flex-row items-center gap-10 md:gap-16"
      >
        
        {/* Colonne gauche — Image */}
        <motion.div className="w-full md:w-1/2" 
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h3 className="text-yellow-400 text-sm uppercase tracking-widest">About Me</h3> <br />
          {/* <img
            src="/images/hero.png"
            alt="About Chadrac"
            className="w-1/2 md:w-3/4 h-auto object-contain rounded-4xl"
          /> */}

          <img
            src="/images/hu.png"
            alt="About Chadrac"
            className="w-1/2 md:w-3/4 h-auto ml-10 object-contain rounded-4xl"
          />

        </motion.div>

        {/* Colonne droite — Texte */}
        <div 
        // className="w-1/2 flex flex-col gap-6"
        className="w-full md:w-1/2 flex flex-col gap-3"
        >

          {/* <h3 className="text-yellow-400 text-sm uppercase tracking-widest">About Me</h3> */}

          <motion.h2 
          // className="text-white text-2xl font-bold uppercase leading-tight" 
          className="text-white text-xl md:text-2xl font-bold uppercase leading-tight"
          initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}>
            Telecom & Networks Engineer |<br /><span className="text-yellow-400">Web/Mobile developper (self-learnt)</span>.
          </motion.h2>

          <motion.p className="text-gray-300 texte-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            As a telecommunications engineer in training, I am developing expertise in IP networks, mobile technologies, and radio engineering. Passionate about technology, I combine this knowledge with strong skills in web and mobile development, enabling me to design and implement innovative digital solutions that bridge connectivity and software. Resilient and highly motivated, I thrive in complex environments and aim to contribute to real‑world projects at leading companies, where advanced technical expertise and immersive experiences foster both professional growth and impactful innovation in the field of telecommunications and digital technologies.
          </motion.p>

          <motion.div className="flex flex-col gap-3 text-gray-300" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* <p><span className="text-white font-semibold">Disponibility :</span> Open to opportunities</p> */}
          </motion.div>

          <motion.a href="#projects" className="bg-yellow-400 text-black border-2  rounded-2xl border-yellow-400 px-8 py-4 font-bold tracking-wider hover:bg-black hover:text-yellow-400 transition duration-300 ease-in-out w-fit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            See my projects
          </motion.a>

        </div>

      </div>

    </section>
  )
}

export default About
