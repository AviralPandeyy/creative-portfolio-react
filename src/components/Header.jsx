import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header ({ isDark, setIsDark }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="w-full bg-transparent sticky top-0 z-40">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="font-bold text-lg">Creative<span className="text-brand-500">.</span></div>
          <div className="hidden md:block text-sm text-slate-500">Design + Code</div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            className="px-3 py-1 rounded-lg border"
          >{isDark ? 'Light' : 'Dark'}</button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="open menu" className="p-2">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 6h18M3 12h18M3 18h18"></path></svg>
          </button>
        </div>
      </nav>

      {open && (
        <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-white dark:bg-slate-800">
          <div className="flex flex-col px-4 py-4 gap-3">
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <button onClick={() => { setIsDark(!isDark); setOpen(false) }} className="text-left">{isDark ? 'Light' : 'Dark'}</button>
          </div>
        </motion.div>
      )}
    </header>
  )
}