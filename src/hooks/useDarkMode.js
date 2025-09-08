import { useEffect, useState } from 'react'

export default function useDarkMode () {
  const [isDark, setIsDark] = useState(() => {
    try {
      const raw = localStorage.getItem('cp-dark')
      if (raw !== null) return JSON.parse(raw)
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    } catch (e) {
      return false
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('cp-dark', JSON.stringify(isDark))
    } catch (e) {}
    if (isDark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [isDark])

  return [isDark, setIsDark]
}