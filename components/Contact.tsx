'use client'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [subscribe, setSubscribe] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await emailjs.send(
        'service_xwokok8',
        'template_o2nt6p5',
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        '88cZDxMZ33cNhuEZt' 
      )
      setSent(true)
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      alert('Erreur lors de l\'envoi. Réessaie plus tard.')
    }
    setLoading(false)
  }

  return (
    <section id="contact" className="px-16 py-20">

      <div className="w-full flex gap-16">

        {/* Colonne gauche */}
        <div className="w-1/2 flex flex-col gap-10">

          {/* Titre */}
          <div>
            <h2 className="text-white text-4xl font-bold uppercase leading-tight">
              Tu veux me contacter ? <br />
              <span className="text-yellow-400">Restons connectés !</span>
            </h2>
          </div>

          {/* Subscribe */}
          <div className="border border-gray-600 flex items-center">
            <input
              type="email"
              placeholder="Entrez votre email"
              value={subscribe}
              onChange={(e) => setSubscribe(e.target.value)}
              className="bg-transparent text-gray-300 px-6 py-4 flex-1 outline-none placeholder-gray-500"
            />
            <button className="bg-yellow-400 text-black px-6 py-4 font-bold uppercase tracking-wider hover:bg-yellow-300 transition">
              S'abonner
            </button>
          </div>

          {/* Infos de contact */}
          <div className="flex flex-col gap-6">

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center shrink-0">
                <span className="text-black text-xl">✉</span>
              </div>
              <div>
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-400">chadracncdamba@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center shrink-0">
                <span className="text-black text-xl">B</span>
              </div>
              <div>
                <p className="text-white font-semibold">Localisation</p>
                <p className="text-gray-400">Congo - Brazzaville</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center shrink-0">
                <span className="text-black text-xl">Tel</span>
              </div>
              <div>
                <p className="text-white font-semibold">Téléphone</p>
                <p className="text-gray-400">+242 06921 7447 / 05 578 9780</p>
              </div>
            </div>

          </div>

        </div>

        {/* Colonne droite — Formulaire */}
        <div className="w-1/2 flex flex-col gap-4">

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Nom*"
              value={form.name}
              onChange={handleChange}
              className="bg-[#111111] border border-gray-700 text-white px-5 py-4 outline-none focus:border-yellow-400 transition placeholder-gray-500"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={form.email}
              onChange={handleChange}
              className="bg-[#111111] border border-gray-700 text-white px-5 py-4 outline-none focus:border-yellow-400 transition placeholder-gray-500"
            />
          </div>

          <input
            type="text"
            name="phone"
            placeholder="Numéro de téléphone"
            value={form.phone}
            onChange={handleChange}
            className="bg-[#111111] border border-gray-700 text-white px-5 py-4 outline-none focus:border-yellow-400 transition placeholder-gray-500"
          />

          <textarea
            name="message"
            placeholder="Votre message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            className="bg-[#111111] border border-gray-700 text-white px-5 py-4 outline-none focus:border-yellow-400 transition placeholder-gray-500 resize-none"
          />

          {sent && (
            <p className="text-yellow-400 text-sm uppercase tracking-widest">
              ✓ Message envoyé avec succès !
            </p>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-yellow-400 text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-yellow-300 transition w-fit flex items-center gap-2 disabled:opacity-50"
          >
            {loading ? 'Envoi...' : 'Envoyer →'}
          </button>

        </div>

      </div>

    </section>
  )
}

export default Contact