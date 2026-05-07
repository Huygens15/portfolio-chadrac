import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#111111] px-16 py-12">

      <div className="flex items-start justify-between gap-16">

        {/* Colonne 1 — Logo + description */}
        <div className="flex flex-col gap-4 w-1/3">
          <h2 className="text-white text-2xl font-bold">
            CHADRAC NDAMBA<span className="text-yellow-400">.</span>
          </h2>
          <p className="text-gray-400">
            Étudiant en Télécommunications et Réseaux, passionné par le développement web et mobile.
          </p>
          {/* Réseaux sociaux */}
          <div className="flex gap-4 mt-2">
            <a href="#" className="w-10 h-10 border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition">
              in
            </a>
            <a href="#" className="w-10 h-10 border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition">
              gh
            </a>
            <a href="#" className="w-10 h-10 border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition">
              tw
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
                <span className="text-black text-sm">✉</span>
              </div>
              <p className="text-gray-400 text-sm">chadracncdamba@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center shrink-0">
                <span className="text-black text-sm">📍</span>
              </div>
              <p className="text-gray-400 text-sm">Congo - Brazzaville</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center shrink-0">
                <span className="text-black text-sm">📞</span>
              </div>
              <p className="text-gray-400 text-sm">+242 XX XXX XXXX</p>
            </div>
          </div>
        </div>

      </div>

      {/* Ligne de séparation + copyright */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex items-center justify-between">
        <p className="text-gray-500 text-sm">
          © 2026 Chadrac Ndamba. Tous droits réservés.
        </p>
        <p className="text-gray-500 text-sm">
          Developped with <span className="text-yellow-400">Next.js</span> & <span className="text-yellow-400">Tailwind CSS</span>
        </p>
      </div>

    </footer>
  )
}

export default Footer