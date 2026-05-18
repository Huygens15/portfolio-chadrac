import { section } from 'framer-motion/client'
import React from 'react'

const notFound = () => {
  return (
    <section id="notFound" className="px-16 py-20">
        <div className='flex min-h-screen flex-col items-center justify-center'>
            <h1 className='text-yellow-300 mb-7  hover:text-white uppercase tracking-widest text-sm font-extrabold  transition duration-300'>
                I'm sorry !
            </h1>
            <img
            src="/images/error404.jpg"
            alt="Not found"
            className="w-24 md:w-40 h-auto object-contain rounded-4xl border-2 border-yellow-400"
          />
        </div>
    </section>
  )
}

export default notFound
