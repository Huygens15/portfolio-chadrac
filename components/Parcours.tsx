'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaUniversity, FaGraduationCap, FaCertificate } from "react-icons/fa";


const Parcours = () => {
  return (
   <section id="parcours" className="px-6 md:px-16 py-20">

      {/* Titre centré */}
      <motion.div className="text-center mb-16" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}>
        <h3 className="text-yellow-400 text-xs md:text-sm uppercase tracking-widest mb-3">The only real school is the one of discipline, pain, and hard work.</h3>
        <h2 className="text-white text-3xl md:text-5xl font-bold uppercase leading-tight">
          My Academic Background
        </h2>
      </motion.div>

      {/* 3 cartes en grille */}
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      >

        {/* Carte 1 */}
        <div className="flex flex-col mt-10 rounded-2xl">
          <div className="relative">
            {/* Icône jaune qui dépasse au-dessus de l'image */}
            <div className="absolute -top-12 left-6 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center z-10">
              <span className="text-black text-3xl"><FaUniversity className="text-black text-3xl" /></span>
            </div>
            <img
              src="/images/ma.jpg"
              alt="master"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 pt-6">
            <span className="text-yellow-400 text-sm uppercase tracking-widest"> 2025 – Ongoing </span>
            <h3 className="text-white text-xl font-bold hover:text-yellow-400 cursor-pointer transition">
              Master’s Degree in Telecommunications
            </h3>
            <p className="text-gray-400">
              ENSP - UMNG - Brazzaville <br /> Training focused on advanced telecoms' systems, 
              mobile telephony, transmission technologies, radio frequency and networks. 
            </p>
          </div>
        </div>

        {/* Carte 2 */}
        <div className="flex flex-col mt-10">
          <div className="relative">
            <div className="absolute -top-12 left-6 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center z-10">
              <span className="text-black text-3xl"><FaGraduationCap className="text-black text-3xl" /></span>
            </div>
            <img
              src="/images/bachelor.jpg"
              alt="Bachelor's degree"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 pt-6">
            <span className="text-yellow-400 text-sm uppercase tracking-widest">2021 — 2024</span>
            <h3 className="text-white text-xl font-bold hover:text-yellow-400 cursor-pointer transition">
              Bachelor’s Degree in Electronics and Telecommunications 
            </h3>
            <p className="text-gray-400">
              ENSP - UMNG - Brazzaville<br /> My technical project : Optimization of CDN network traffic on the IP backbone between BZ & PN : Congo Telecom. 
            </p>
          </div>
        </div>

        {/* Carte 3 */}
        <div className="flex flex-col mt-10">
          <div className="relative">
            <div className="absolute -top-12 left-6 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center z-10">
              <span className="text-black text-3xl"><FaCertificate className="text-black text-3xl" /></span>
            </div>
            <img
              src="/images/bac.jpg"
              alt="certificate"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 pt-6">
            <span className="text-yellow-400 text-sm uppercase tracking-widest">2020 - 2021</span>
            <h3 className="text-white text-xl font-bold hover:text-yellow-400 cursor-pointer transition">
              Science track (Series D) high school diploma
            </h3>
            <p className="text-gray-400">
              High School, 30 Mars 1970 - Pointe-Noire
            </p>
          </div>
        </div>

      </motion.div>

    </section>
  )
}

export default Parcours
