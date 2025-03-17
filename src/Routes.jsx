import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderNav from './components/HeaderNav';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contac';
import Error404 from './components/Error404';
import './App.css';

//Define el enrutador con las rutas principales
const router = createBrowserRouter([
    {
        path:"/",
        errorElement: <Error404 />,
        element: <HeaderNav />,         //elemento base
        children: [
            { path:"/", element: <Home /> },
            { path:"/projects", element: <Projects /> },
            { path:"/resume", element: <Resume /> },
            { path:"/contact", element: <Contact /> }
        ]
    },

]);

// //compromente que usara RouterProvider
const RoutesComponent = () => {
    return <RouterProvider router={router} />;
};

export default RoutesComponent;


/*Se podrian agregar mas modelos que manejen otro HeaderNav para ususarios logueados, por ejemplo que les permita descargar el cv.PDF con mas datos pesonales como direccion y numero de telefono personal y mail.
ejemplo de estructura:

Primero: En Routes.jsx
{
        path:"/dasboard",
        element: <HeaderLogin />,         //elemento base
        children: [
            { path:"/dashboard", element: <Home /> },
            { path:"/dashboard/projects", element: <Projects /> },
            { path:"/dashboard/resume", element: <Resume /> },
            { path:"/dashboard/personalcontact", element: <PersonalContact /> }
        ]
    },
]);

Segundo: Se crea HeaderLogin.jsx; donde se manejara el header de las rutas privadas.

Tercero: Se crean las paginas corerspondientes en la estructura para luego agregarlas a Routes.jsx...
*/