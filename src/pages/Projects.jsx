import React from 'react';
import { useState, useEffect } from "react";
import projectsData from '../data/projects';

function Projects () {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(projectsData)
  }, [])

  return (
    <>
      <div className='bodyProjcts'>
        <h1>Proyectos Realizados</h1>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <img src={project.image} alt={`${project.name}image`} />
              <a href={project.url} target="_blank" rel="noopener noreferrer">Ver imagen del Proyecto</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Projects;


/*
import React from 'react';
import projects from '../data/projects';

const Projects = () => {
  return (
    <div className='bodyProycts'>
      <h1>Proyectos Realizados</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <img src={project.image} alt={`${project.name}image`} />
            <a href={project.url} target="_blank" rel="noopener noreferrer">Ver imagen del Proyecto</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
////////////////

Nota: en projectos pequenos se utilizara const en lugar de function.
-En la linea 15 se añade target="_blank" rel="noopener noreferrer" para abrir en una nueva pagina y que esta no sea rastreable por parte del seo a modo que se privada. 
 */