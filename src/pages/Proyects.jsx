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
            <img src={proyect.image} alt={`${proyect.name}image`} />
            <a href={project.url} target="_blank" rel="noopener noreferrer">Ver imagen del Proyecto</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
