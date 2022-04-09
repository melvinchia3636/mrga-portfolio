import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react'
import FETCH_HEADERS from '../constants';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [links, setLinks] = useState({});
  const [currentSelected, setCurrentSelected] = useState(null)

  useEffect(() => {
    fetch("https://api.github.com/repos/melvinchia3636/MRGA/contents", FETCH_HEADERS).then(e => e.json()).then(data => setProjects(data.filter(e => e.name.endsWith(".png"))));
    fetch("https://raw.githubusercontent.com/melvinchia3636/MRGA/main/index.json").then(e => e.json()).then(l => setLinks(l))
  }, [])

  return currentSelected === null ? <div className="flex-1 items-center justify-center p-16 w-3/4">
    <h2 className="text-4xl mb-6">
      <span className="text-teal-500">{[...new Set(projects.map(e => e.name.split("-")[0].trim()))].length} projects</span>
      &nbsp;were completed in the year 2022</h2>
    <div className="w-full flex flex-col divide-y-2 divide-neutral-200">
      {[...new Set(projects.map(e => e.name.split("-")[0].trim()))].map(e => (
        <button onClick={() => setCurrentSelected(e)} className="px-5 py-4 cursor-pointer text-2xl flex items-center justify-between hover:bg-neutral-50 transition-all">
          {e}
          <div className="flex items-center gap-2">
            {projects.filter(f => f.name.split("-")[0].trim() === e).length}
            <Icon icon="uil:angle-right" className="w-6 h-6" />
          </div>
        </button>
      ))}
    </div>
  </div> : <div className="w-3/4 py-16">
    <button onClick={() => setCurrentSelected(null)} className="text-2xl flex items-center">
      <Icon icon="uil:angle-left" className="w-6 h-6" />
      Go back
    </button>
    <h2 className="text-5xl mb-12 text-center text-teal-500">{currentSelected}</h2>
    <div className="grid grid-cols-2 items-center justify-center full gap-x-8 gap-y-20">
      {projects.filter(e => e.name.split("-")[0].trim() === currentSelected).map(e => <div className="flex flex-col items-center justify-between">
        <h1 className="text-3xl mb-4">{e.name.split("-")[1].split(".")[0].trim()}</h1>
        <div className="border-2 border-neutral-700 w-full p-2 border-b-0 flex gap-2">
          <div className="w-3 h-3 bg-rose-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-400 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <div className="border-2 border-neutral-700">
          <img className="aspect-video object-cover w-full" src={e.download_url} />
        </div>
        <a href={links[e.name]} target="_blank" className="py-4 flex items-center justify-center w-full border-2 border-neutral-700 mt-4 text-2xl">Visit website</a>
      </div>)}
    </div>
  </div>
}

export default Projects