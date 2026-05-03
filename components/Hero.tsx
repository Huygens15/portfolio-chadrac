import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-16"
      style={{ background: "url('/images/banner_bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="w-full flex items-center justify-between gap-10">

        {/* Colonne gauche — Image */}
        <div className="w-1/2 flex items-end justify-center">
          <img
            src="/images/banner_img.png"
            alt="Chadrac Ndamba"
            className="w-3/4 h-auto object-contain"
          />
        </div>

        {/* Colonne droite — Texte */}
        <div className="w-1/2 flex flex-col gap-6">
          <h3 className="text-yellow-400 text-xl font-semibold">Hello I'm Chadrac</h3>
          <h1 className="text-white text-4xl font-bold uppercase leading-tight">
            Telecommunications & Networks Engineer (In Training).
          </h1>
          <p className="text-gray-300 text-lg">
            With a passion for technology, I combine web and mobile development
            with networking and telecommunications to offer unique and limitless expertise.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="bg-yellow-400 text-black px-6 py-3 font-bold hover:bg-yellow-300 transition flex items-center gap-2">
              Download my CV
            </a>
            <a href="#about" className="border-2 border-white text-white px-6 py-3 font-bold uppercase hover:bg-white hover:text-black transition flex items-center gap-2">
              Know more about me
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero