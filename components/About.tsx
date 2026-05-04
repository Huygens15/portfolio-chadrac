import React from 'react'

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center px-16 py-20">

      <div className="w-full flex items-center gap-16">

        {/* Colonne gauche — Image */}
        <div className="w-1/2">
          <img
            src="/images/about_img.jpg"
            alt="About Chadrac"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Colonne droite — Texte */}
        <div className="w-1/2 flex flex-col gap-6">

          <h3 className="text-yellow-400 text-sm uppercase tracking-widest">About Me</h3>

          <h2 className="text-white text-5xl font-bold uppercase leading-tight">
            I am Chadrac NDAMBA
          </h2>

          <p className="text-gray-300 text-lg">
            Je suis étudiant en Télécommunications et Réseaux, passionné par le développement web et mobile. 
            Je combine mes compétences techniques en réseaux avec le développement pour créer des solutions 
            complètes et innovantes.
          </p>

          <div className="flex flex-col gap-3 text-gray-300">
            <p><span className="text-white font-semibold">Nom :</span> Chadrac Ndamba</p>
            <p><span className="text-white font-semibold">Email :</span> chadrac@email.com</p>
            <p><span className="text-white font-semibold">Localisation :</span> Congo</p>
            <p><span className="text-white font-semibold">Disponibilité :</span> Open aux opportunités</p>
          </div>

          <a href="#" className="bg-yellow-400 text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-yellow-300 transition w-fit">
            Download my CV 
          </a>

        </div>

      </div>

    </section>
  )
}

export default About
