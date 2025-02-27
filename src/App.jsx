import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Footer from './components/Footer'
import reactLogo from '../src/react.svg'
import viteLogo from '../src/vite.svg'

const App = () => {
    
    return (
        <> 
            <nav className="headerNav">
                    <Link to='/'>⌂ Home</Link> |
                    <Link to='/projects'> Projects</Link> |
                    <Link to='/resume'> Resume Cv</Link> |
                </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/resume' element={<Resume />} />
            </Routes>
            
            <Footer />
        </>
    )
}

export default App




/*notas: el fragment agrupa una lista de hijos sin agregar nodos extra al DOM. Simplemente envuelve y mantiene un clean code. Si se utiliza un section, no es necesario un fragment. Tecnicamente; "un fragment se refiere a una característica de React que te permite agrupar un conjunto de elementos hijos sin agregar un nodo adicional al DOM (Documento Object Model) resultante."

*/

/**
 <div>
            <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            </div>
                <h1>Vite + React</h1>
                <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
                <p className="read-the-docs">
                Click on the Vite and React logos to learn more
                </p> 
            </div>
 */

