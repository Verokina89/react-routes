import dashboardProject from '../assets/img/dasboardProject.png';
import projectBreak from '../assets/img/projectbreak-back-react.onrender.com.png';
import shopKianela from '../assets/img/shopbykianelaProjectReact.png';

const projects = [
  {
    id: 1,
    name: 'Vips Dasboard.',
    image: dashboardProject,
    description: 'Creacion de un web basada en un Dashboard que contiene herramientas de ayudas para el escritorio personal.',
    url: 'https://verokina89.github.io/project-break-dashboard/index.html',
  },
  {
    id: 2,
    name: 'BBDD Project Break Backend',
    image: projectBreak,
    description: 'Creación de una base de datos desde cero con MongoDB, deploy con Render.',
    url: 'https://projectbreak-back-react.onrender.com/api/products',
  },
  {
    id: 3,
    name: 'Shop Kianela ProjectReact',
    image: shopKianela,
    description: 'Proyecto final que combina todos los lenguajes y tecnologias aprendidos en el bootcamp. Partiendo del uso de projectos anteriores; como la api de productos, creada y renderizada que se reutiliza en esta app (manejada con mongoDB). Se combinan proyectos reutilizables pero con las modificacioens pertinentes para el lenguaje (React)',
    url: 'https://luxury-gecko-33bf63.netlify.app',
  },

];

export default projects;
