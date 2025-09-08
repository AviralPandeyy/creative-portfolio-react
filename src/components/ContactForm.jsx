import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm () {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  function validateEmail (email) {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus({ ok: false, msg: 'All fields are required.' })
      return
    }
    if (!validateEmail(form.email)) {
      setStatus({ ok: false, msg: 'Please enter a valid email.' })
      return
    }

    setStatus({ ok: true, msg: 'Message sent! Thank you 🌟' })
    setForm({ name: '', email: '', message: '' })

    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <section id="contact" className="py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="text-slate-500 mt-2">Want to collaborate? Send a message.</p>

        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm">Name</label>
            <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full rounded-md border px-3 py-2 mt-1" required />
          </div>
          <div>
            <label className="block text-sm">Email</label>
            <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full rounded-md border px-3 py-2 mt-1" type="email" required />
          </div>
          <div>
            <label className="block text-sm">Message</label>
            <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full rounded-md border px-3 py-2 mt-1" rows="5" required />
          </div>

          <div className="flex items-center gap-3">
            <button type="submit" className="px-4 py-2 rounded-lg border">Send</button>
            {status && (
              <div className={`text-sm ${status.ok ? 'text-green-500' : 'text-red-500'}`}>{status.msg}</div>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  )
}