import { experiences, studies } from '../data/resume';

import { Link } from 'react-router-dom';
import logo from '../assets/img/LogoDevShort.png';
import logoHtml from '../assets/img/icons8-html.svg';
import logoCss from '../assets/img/icons8-css.svg';
import logoJS from '../assets/img/icons8-javascript.svg';
import logoReact from '../assets/img/react.svg';
import logoNode from '../assets/img/icons8-node-js.svg';
import logoExpress from '../assets/img/express-svgrepo-com.svg';
import logoMongo from '../assets/img/mongoDB.png';
import logoMySQL from '../assets/img/mysql-logo-svgrepo-com.svg';
import logoGit from '../assets/img/icons8-git.svg'
import logoFigma from '../assets/img/figma-brands.svg'
import logoWordpress from '../assets/img/wordpress-brands-solid.svg'
import logoAppleStore from '../assets/img/icons8-ios-logo.svg'
import logoCanva from '../assets/img/canva-svgrepo-com.svg'

function Resume() {
  return (
    <div className='bodyResume'>
        <img src={logo} alt="logo" />
        <h1>Conocimientos, Experiencias y Tecnologías</h1>
        <div className='profProfile'>
                <p> Soy una profesional dedicada, con constancia e inclinada al aprendizaje continuo, siempre enfocada en el cumplimiento de objetivos. Me gusta trabajar en equipo y siempre me comprometo al 100% con mis responsabilidades laborales. Recientemente, he finalizado un Bootcamp de Full Stack Web Developer, lo que ha expandido mis habilidades en desarrollo y programación. Estoy en constante aprendizaje y práctica de los lenguajes y tecnologías adquiridas, como HTML, CSS, JavaScript, React, y frameworks como Node.js, Express, y CORS. Además, tengo experiencia en la creación y gestión de bases de datos, incluyendo SQL (MySQL), MongoDB y Testing con Jest.</p>
                <p>En paralelo, cuento con sólida formación en tecnologías para dispositivos móviles, con experiencia en servicio y soporte técnico, incluyendo reparación de celulares y tablets. Soy licenciada en Periodismo Corporativo, con experiencia en marketing digital, diseño gráfico para webs, y gestión de redes sociales como Community Manager. Estoy capacitada para gestionar campañas de comunicación interna y externa.</p>
                <p>Me considero una persona comunicativa, organizada y planificada, con habilidades de liderazgo y siempre comprometida con la ética empresarial. La redacción y la ortografía son puntos fuertes en mi perfil. Me apasiona trabajar por el cumplimiento de metas y objetivos, y me defino como creativa, innovadora, proactiva y dinámica. Además, tengo habilidades destacadas en la resolución de conflictos, lo que me permite manejar situaciones complejas de manera efectiva. </p>
        </div>
        <div className='logos'>
            <img src={logoHtml} alt="logoHtml" />
            <img src={logoCss} alt="logoCss" />
            <img src={logoJS} alt="logoJS" />
            <img src={logoReact} alt="logoReact" />
            <img src={logoNode} alt="logoNode" />
            <img src={logoExpress} alt="logoExpress" />
            <img src={logoMongo} alt="logoMongo" />
            <img src={logoMySQL} alt="logoMySQL" />   
            <img src={logoGit} alt="logoGit" />

            <img src={logoAppleStore} alt="logoAppleStore" />
            <img src={logoFigma} alt="logoAppleStore" />
            <img src={logoWordpress} alt="logoWordpress"/>
            <img src={logoCanva} alt="logoCanva" />
        </div> 

        <div className='studyCard'>
            <h2>Mi formación Academica es:</h2>
            <ul>
                {studies.map((study) => (
                    <li key={study.id}>
                        <h3>- {study.title}.</h3>
                        <h4>{study.institution}.</h4>
                        <h4>{study.date}.</h4>
                    </li>
                    ))}
            </ul>       
        </div>
        <div className='jobsCard'>
            <h2>Mis empleos más recientes han sido como:</h2>
            <ul>
                {experiences.map((experience) => (
                    <li key={experience.id}>
                        <p>{experience.title} - {experience.company}</p>
                        <h3>{experience.tasks} </h3>
                        <h4>{experience.date}</h4>
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
