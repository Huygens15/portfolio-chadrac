'use client'
import React, { useState } from 'react'

const projects = [
  {
    periode: '2024 - Présent',
    contexte: 'Projet Personnel',
    nom: 'Application de Gestion Réseau',
    description: 'Développement d\'une application web pour monitorer et gérer un réseau local. Utilisation de Next.js pour le frontend et Node.js pour le backend.',
    notions: ['Next.js', 'Node.js','TCP/IP', 'REST API'],
    image: '/images/portfolio_1.jpg',
  },
  {
    periode: '2023 - 2024',
    contexte: 'Projet Académique',
    nom: 'Simulation de Protocoles Réseaux',
    description: 'Simulation de protocoles TCP/IP et routage dynamique dans un environnement virtuel avec Cisco Packet Tracer.',
    notions: ['Next.js', 'Node.js','TCP/IP', 'REST API'],
    image: '/images/portfolio_2.jpg',
  },
  {
    periode: '2023',
    contexte: 'Projet Personnel',
    nom: 'Application Mobile de Suivi',
    description: 'Développement d\'une application mobile avec React Native pour le suivi des performances réseau en temps réel.',
    notions: ['Next.js', 'Node.js','TCP/IP', 'REST API'],
    image: '/images/portfolio_3.jpg',
  },
  {
    periode: '2023',
    contexte: 'Projet Personnel',
    nom: 'Application Mobile de Suivi',
    description: 'Développement d\'une application mobile avec React Native pour le suivi des performances réseau en temps réel.',
    notions: ['Next.js', 'Node.js','TCP/IP', 'REST API'],
    image: '/images/portfolio_4.jpg',
  },
]

const Projects = () => {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1))

  return (
    <section id="projects" className="px-16 py-20">

        {/* Titre centré */}
        <div className="text-center mb-16">
            <h3 className="text-yellow-400 text-sm uppercase tracking-widest mb-3">Skills improve with practice.</h3>
            <h2 className="text-white text-5xl font-bold uppercase leading-tight">
                My Skills & Completed Projects
            </h2>
        </div>

        {/* PARTIE 1 — Liste des projets */}
        <div className="flex flex-col mb-20">
            {projects.map((project, index) => (
            <div key={index} className="flex items-center gap-8 py-10 border-b border-white/10">
                {/* Colonne 1 — Période et contexte */}
                <div className="w-1/4">
                <h4 className="text-white text-2xl font-bold">{project.periode}</h4>
                <span className="text-white text-sm uppercase tracking-widest">{project.contexte}</span>
                <p className="text-yellow-400 text-lg mt-2">{project.nom}</p>
                </div>

                {/* Colonne 2 — Description */}
                <div className="w-2/4 px-8">
                <p className="text-gray-400">{project.description}</p>
                </div>

                {/* Colonne 3 — Barre de compétence */}
                <div className="w-1/4 flex flex-col gap-3">
                    <span className="text-white text-sm uppercase tracking-widest">Concepts learned</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {project.notions.map((notion, i) => (
                        <span key={i} className="bg-yellow-400 text-black text-xs font-bold px-3 py-1">
                            {notion}
                        </span>
                    ))}
                    </div>
                </div>
            </div>
            ))}
        </div>

      {/* PARTIE 2 — Galerie slider */}
        <div className="flex items-center gap-16">

            {/* Photos */}
            <div className="w-2/3 flex gap-4">
                {[current, (current + 1) % projects.length].map((idx, i) => (
                <div key={i} className="w-1/2 relative overflow-hidden group">
                    <img
                    src={projects[idx].image}
                    alt="Projet"
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay au survol */}
                    <div className="absolute inset-0 bg-yellow-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                    <span className="text-black text-xs uppercase tracking-widest font-bold">{projects[idx].contexte}</span>
                    <h3 className="text-black text-xl font-bold text-center px-4">{projects[idx].nom}</h3>
                    <span className="w-10 h-0.5 bg-black"></span>
                    </div>
                </div>
                ))}
            </div>

            {/* Texte + navigation */}
            <div className="w-1/3 flex flex-col gap-6">
                <h3 className="text-yellow-400 text-sm uppercase tracking-widest">Gallery</h3>
                <h2 className="text-white text-4xl font-bold uppercase leading-tight">
                    My Recent Projects
                </h2>
                <p className="text-gray-400">
                    Explore a selection of my projects created during my studies and through my personal practice.
                </p>

                {/* Indicateurs */}
                <div className="flex gap-2">
                {projects.map((_, i) => (
                    <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1 transition-all duration-300 ${current === i ? 'w-8 bg-yellow-400' : 'w-4 bg-gray-600'}`}
                    />
                ))}
                </div>

                {/* Boutons navigation */}
                <div className="flex gap-4">
                <button
                    onClick={prev}
                    className="w-12 h-12 border border-white text-white hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition text-xl">
                    ←
                </button>
                <button
                    onClick={next}
                    className="w-12 h-12 border border-white text-white hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition text-xl">
                    →
                </button>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Projects