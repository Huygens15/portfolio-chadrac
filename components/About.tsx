import React from 'react'

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center px-16 py-20">

      <div className="w-full flex items-center gap-16">

        {/* Colonne gauche — Image */}
        <div className="w-1/2">
          <h3 className="text-yellow-400 text-sm uppercase tracking-widest">About Me</h3> <br />
          <img
            src="/images/about_img.jpg"
            alt="About Chadrac"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Colonne droite — Texte */}
        <div className="w-1/2 flex flex-col gap-6">

          {/* <h3 className="text-yellow-400 text-sm uppercase tracking-widest">About Me</h3> */}

          <h2 className="text-white text-2xl font-bold uppercase leading-tight">
            Telecom & Networks Engineer |<br /><span className="text-yellow-400">Web / Mobile developper</span>.
          </h2>

          <p className="text-gray-300 text-lg">
            Je suis étudiant en Télécommunications et Réseaux, passionné par le développement web et mobile. 
            Je combine mes compétences techniques en réseaux avec le développement pour créer des solutions 
            complètes et innovantes.
          </p>

          <div className="flex flex-col gap-3 text-gray-300">
            <p><span className="text-white font-semibold">Full name :</span>NDAMBA KOUZOU Chadrac</p>
            <p><span className="text-white font-semibold">Email :</span> chadracncdamba@gmail.com</p>
            <p><span className="text-white font-semibold">Localisation :</span> Congo- Brazzaville</p>
            <p><span className="text-white font-semibold">Disponibility :</span> Open to opportunities</p>
          </div>

          <a href="#projects" className="bg-yellow-400 text-black border-2  rounded-2xl border-yellow-400 px-8 py-4 font-bold uppercase tracking-wider hover:bg-black hover:text-yellow-400 transition duration-300 ease-in-out w-fit">
            See my projects
          </a>

        </div>

      </div>

    </section>
  )
}

export default About
