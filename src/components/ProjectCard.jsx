import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard ({ project }) {
  return (
    <motion.article whileHover={{ y: -6 }} className="bg-white dark:bg-slate-800 rounded-xl p-4 card-shadow">
      <img src={project.image || '/public/assets/landingpage.jpg' || '/public/assets/uimock.jpg'|| '/public/assets/cms.jpg'} alt={project.title} className="w-full h-40 object-cover rounded-md" />

     


      <h3 className="mt-3 font-semibold">{project.title}</h3>
      <p className="text-sm mt-2 text-slate-500 dark:text-slate-300">{project.description}</p>
      <div className="mt-3">
        <a href={project.link || '#'} className="text-sm underline">Open</a>
      </div>
    </motion.article>
  )
}