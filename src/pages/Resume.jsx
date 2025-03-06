import { experiences, studies } from '../data/resume';
import React from 'react';
import { Link } from 'react-router-dom';

function Resume() {
  return (
    <div className='bodyResume'>
        <div className='jobs'>
            <img src="/src/img/logoDevprogrammer.png" alt="Logo" />
            <h1>Verónica I Pérez S</h1>
            <h2>Experiencia Laboral</h2>
            <ul>
                {experiences.map((experience) => (
                    <li key={experience.id}>
                        <h3>{experience.title} - {experience.company}</h3>
                        <p>{experience.date}</p>
                    </li>
                ))}
            </ul>
        </div>
        <div className='study'>
            <h2>Formacion Academica</h2>
            <ul>
                {studies.map((study) => (
                    <li key={study.id}>
                        <h3>{study.title}</h3>
                        <p>{study.institution}</p>
                        <p>{study.date}</p>
                    </li>
                ))}
            </ul>       
        </div>
        <br />
        <Link to="/">Inicio</Link>    
    </div>
    
  );
}

export default Resume;
