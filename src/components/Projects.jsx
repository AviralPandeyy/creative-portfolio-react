import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'

export default function Projects () {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    import('../data/projects.json').then(m => setProjects(m.default))
  }, [])

  return (
    <section id="projects" className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Projects</h2>
        <p className="text-slate-500 mt-2">A selection of recent work.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}