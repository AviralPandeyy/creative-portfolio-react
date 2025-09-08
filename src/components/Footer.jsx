import React from 'react'

export default function Footer () {
  return (
    <footer className="py-8 mt-8 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 text-sm text-slate-500">Made with ❤️ • © {new Date().getFullYear()} Creative Portfolio</div>
    </footer>
  )
}