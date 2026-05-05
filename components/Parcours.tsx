import React from 'react'

const Parcours = () => {
  return (
   <section id="parcours" className="px-16 py-20">

      {/* Titre centré */}
      <div className="text-center mb-16">
        <h3 className="text-yellow-400 text-sm uppercase tracking-widest mb-3">The only real school is the one of discipline, pain, and hard work.</h3>
        <h2 className="text-white text-5xl font-bold uppercase leading-tight">
          My Academic Background
        </h2>
      </div>

      {/* 3 cartes en grille */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Carte 1 */}
        <div className="flex flex-col mt-10 rounded-2xl">
          <div className="relative">
            {/* Icône jaune qui dépasse au-dessus de l'image */}
            <div className="absolute -top-12 left-6 w-20 h-20 bg-yellow-400 flex items-center justify-center z-10">
              <span className="text-black text-3xl">🎓</span>
            </div>
            <img
              src="/images/service_1.jpg"
              alt="Licence"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 pt-6">
            <span className="text-yellow-400 text-sm uppercase tracking-widest">2022 — Présent</span>
            <h3 className="text-white text-xl font-bold hover:text-yellow-400 cursor-pointer transition">
              Licence en Télécommunications et Réseaux
            </h3>
            <p className="text-gray-400">
              Nom de ton école. Description courte de ta formation et des compétences acquises.
            </p>
          </div>
        </div>

        {/* Carte 2 */}
        <div className="flex flex-col mt-10">
          <div className="relative">
            <div className="absolute -top-12 left-6 w-20 h-20 bg-yellow-400 flex items-center justify-center z-10">
              <span className="text-black text-3xl">📚</span>
            </div>
            <img
              src="/images/service_2.jpg"
              alt="Baccalauréat"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 pt-6">
            <span className="text-yellow-400 text-sm uppercase tracking-widest">2019 — 2022</span>
            <h3 className="text-white text-xl font-bold hover:text-yellow-400 cursor-pointer transition">
              Baccalauréat Scientifique
            </h3>
            <p className="text-gray-400">
              Nom de ton lycée. Description courte de tes années au lycée.
            </p>
          </div>
        </div>

        {/* Carte 3 */}
        <div className="flex flex-col mt-10">
          <div className="relative">
            <div className="absolute -top-12 left-6 w-20 h-20 bg-yellow-400 flex items-center justify-center z-10">
              <span className="text-black text-3xl">✏️</span>
            </div>
            <img
              src="/images/service_3.jpg"
              alt="BEPC"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 pt-6">
            <span className="text-yellow-400 text-sm uppercase tracking-widest">2016 — 2019</span>
            <h3 className="text-white text-xl font-bold hover:text-yellow-400 cursor-pointer transition">
              Brevet d'Études du Premier Cycle
            </h3>
            <p className="text-gray-400">
              Nom de ton collège. Description courte de tes années au collège.
            </p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Parcours
