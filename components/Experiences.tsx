'use client'
import React, { useState } from 'react'

const experiences = [
  {
    nom: 'Networks & Telecom intership',
    poste: 'Datacom technician (intern) ',
    description: 'Participation à la configuration et maintenance de l\'infrastructure réseau. Mise en place de VLANs et gestion des équipements Cisco.',
    image: '/images/testimonial_1.jpg',
  },
  {
    nom: 'Projet de Fin d\'Études',
    poste: 'Développeur Web & Réseau',
    description: 'Conception et développement d\'une application de supervision réseau en temps réel avec dashboard interactif.',
    image: '/images/testimonial_2.jpg',
  },
  {
    nom: 'Freelance Développement Web',
    poste: 'Développeur Frontend',
    description: 'Création de sites web pour des clients locaux. Utilisation de React, Next.js et Tailwind CSS pour des interfaces modernes.',
    image: '/images/testimonial_1.jpg',
  },
]

const Experiences = () => {

  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? experiences.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === experiences.length - 1 ? 0 : c + 1))

  const visible = [
    experiences[current],
    experiences[(current + 1) % experiences.length],
  ]

  return (
    <section id="experience" className="px-16 py-20">

      {/* En-tête */}
      <div className="flex items-start justify-between mb-16">
        <div>
          <h3 className="text-yellow-400 text-sm uppercase tracking-widest mb-3">Expériences</h3>
          <h2 className="text-white text-5xl font-bold uppercase leading-tight max-w-lg">
            My Professional Experience
          </h2>
        </div>

        {/* Boutons navigation */}
        <div className="flex gap-3 mt-4">
          <button onClick={prev} className="w-12 h-12 border border-gray-600 text-white hover:border-yellow-400 hover:text-yellow-400 transition text-xl">
            ‹
          </button>
          <button onClick={next} className="w-12 h-12 border border-gray-600 text-white hover:border-yellow-400 hover:text-yellow-400 transition text-xl">
            ›
          </button>
        </div>
      </div>

      {/* 2 cartes */}
      <div className="grid grid-cols-2 gap-8">
        {visible.map((exp, i) => (
          <div key={i} className="bg-[#111111] p-8 relative flex flex-col gap-4 border-t-2 border-yellow-400">

            {/* Photo ronde centrée en haut */}
            <div className="flex justify-center -mt-14 mb-4">
              <img
                src={exp.image}
                alt={exp.nom}
                className="w-24 h-24 rounded-full object-cover border-4 border-[#111111]"
              />
            </div>

            {/* Nom et poste */}
            <h4 className="text-white text-xl font-bold">{exp.nom}</h4>
            <span className="text-yellow-400 text-sm">{exp.poste}</span>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed">{exp.description}</p>

            {/* Guillemets jaunes */}
            <div className="flex justify-end mt-4">
              <span className="text-yellow-400 text-5xl font-serif leading-none">"</span>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Experiences