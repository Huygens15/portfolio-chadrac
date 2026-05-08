'use client'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'
import { motion } from 'framer-motion'

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
        <motion.div className="w-1/2 flex flex-col gap-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        >

          {/* Titre */}
          <div>
            <h2 className="text-white text-4xl font-bold uppercase leading-tight">
               I'm open to opportunities. <br />
              <span className="text-yellow-400">Let’s connect !</span>
            </h2>
          </div>

          {/* Subscribe */}
          {/* <div className="border border-gray-600 flex items-center">
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
          </div> */}

          {/* Infos de contact */}
          <div className="flex flex-col gap-6">

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center shrink-0">
                <span className="text-black text-xl"><MdEmail className="text-black text-xl" /></span>
              </div>
              <div>
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-400">chadracncdamba@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center shrink-0">
                <span className="text-black text-xl"><MdLocationOn className="text-black text-xl" /></span>
              </div>
              <div>
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-400">Congo - Brazzaville</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center shrink-0">
                <span className="text-black text-xl"><MdPhone className="text-black text-xl" /></span>
              </div>
              <div>
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-400">+242 06921 7447 / 05 578 9780</p>
              </div>
            </div>

          </div>

        </motion.div>

        {/* Colonne droite — Formulaire */}
        <motion.div className="w-1/2 flex flex-col gap-4"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        >

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={form.name}
              onChange={handleChange}
              className="bg-[#111111] border border-gray-700  rounded-2xl text-white px-5 py-4 outline-none focus:border-yellow-400 transition placeholder-gray-500"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={form.email}
              onChange={handleChange}
              className="bg-[#111111] border border-gray-700 text-white px-5 py-4 outline-none rounded-2xl focus:border-yellow-400 transition placeholder-gray-500"
            />
          </div>

          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            value={form.phone}
            onChange={handleChange}
            className="bg-[#111111] border border-gray-700 text-white px-5 py-4 rounded-2xl outline-none focus:border-yellow-400 transition placeholder-gray-500"
          />

          <textarea
            name="message"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            className="bg-[#111111] border border-gray-700 text-white px-5 py-4 outline-none focus:border-yellow-400 transition placeholder-gray-500 resize-none"
          />

          {sent && (
            <p className="text-yellow-400 text-sm uppercase tracking-widest">
              Message envoyé avec succès !
            </p>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-yellow-400 text-black px-8 py-4 font-bold rounded-2xl tracking-wider  border-2  hover:bg-black  hover:text-yellow-400  transition duration-300 ease-in-out w-fit flex items-center gap-2 "
          >
            {loading ? 'Sending...' : 'Send '}
          </button>

        </motion.div>

      </div>

    </section>
  )
}

export default Contact