import React from 'react'
import { motion } from 'framer-motion'

export default function Hero () {
  return (
    <section className="pt-10 pb-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1 initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I’m <span className="text-brand-500">Avi</span> — a UI/UX-focused Frontend Developer
          </motion.h1>
          <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-slate-600 dark:text-slate-300">
            I build clean, accessible, and responsive websites with delightful micro-interactions.
          </motion.p>

          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-4 py-2 rounded-lg border shadow-sm">View projects</a>
            <a href="#contact" className="px-4 py-2 rounded-lg border shadow-sm">Hire me</a>
          </div>
        </div>

        <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="hidden md:block">
          <div className="card-shadow rounded-2xl overflow-hidden">
            <img src="/public/assets/hero.jpg" alt="hero" className="w-full h-64 object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}