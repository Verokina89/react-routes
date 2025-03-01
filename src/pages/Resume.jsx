import { experiences, studies } from '../data/resume';

function Resume() {
  return (
    <div className='bodyResume'>
        <div className='jobs'>
            <h1>Verónica Isabel Pérez Suárez</h1>
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
    </div>
  );
}

export default Resume;
