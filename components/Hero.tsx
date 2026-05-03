import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-10 pt-20"
      style={{ backgroundImage: "url('/images/banner_bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>

      <div className="flex flex-col gap-6 max-w-xl">

        <h3 className="text-white text-2xl">Hello I'm Chadrac</h3>

        <h1 className="text-white text-5xl font-bold uppercase leading-tight">
          Développeur Web Basé au Congo
        </h1>

        <p className="text-gray-300 text-lg">
          Passionné par le développement web, je crée des expériences digitales modernes et intuitives.
        </p>

        <div className="flex gap-4 mt-4">
          <a href="#" className="bg-yellow-400 text-black px-6 py-3 font-bold hover:bg-yellow-300 transition">
            Télécharger CV
          </a>
          <a href="#about" className="border border-white text-white px-6 py-3 hover:bg-white hover:text-black transition">
            En savoir plus
          </a>
        </div>

      </div>

    </section>
  )
}

export default Hero