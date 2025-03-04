import React from 'react';
import { useState, useEffect } from "react";
import projectsData from '../data/projects';
import { Link } from 'react-router-dom';

function Projects () {
  ///cuando trabajemos con bbdd de afuera se utilizaria el siguiente bloque de codigo
  // const [projects, setProjects] = useState([])   //manejamos destro del array los cambio de estados de projects.js

  // useEffect(() => {                              //hacemos uso del useEffect para derrollar la ejecucion 
  //   setProjects(projectsData)
  // }, [])

  ///En el caso de este proyecto no es necesario trabajar ocn los efectos o cambios de estado porque la data esta dentro de nuestro proyecto. 
  return (
    <>
      <div className='bodyProjcts'>
        <h1>Proyectos Realizados</h1>
        <ul>
          {projectsData.map((project) => (
            <li key={project.id}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <img src={project.image} alt={`${project.name}image`} />
              <a href={project.url} target="_blank" rel="noopener noreferrer">
              Visit Website
              </a>
            </li>
          ))}
        </ul>
      </div>
      <br />
      <Link to="/">Ir a Home</Link>
    </>
  );
}

export default Projects;


/*
import React from 'react';
import projectsData from '../data/projects';

const Projects = () => {
  return (
    <div className='bodyProycts'>
      <h1>Proyectos Realizados</h1>
      <ul>
        {projectsData.map((project) => (
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