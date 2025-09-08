import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import useDarkMode from './hooks/useDarkMode'

export default function App () {
  const [isDark, setIsDark] = useDarkMode()

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
      <Header isDark={isDark} setIsDark={setIsDark} />

      <main className="flex-grow">
        <Hero />
        <Projects />
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}