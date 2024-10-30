import { BrowserRouter as Router } from "react-router-dom";
import Home from './pages/Home'
import Proyects from './pages/Proyects'
import Resume from './pages/Resume'

const App = () => {
    return (
        <Router>
            <nav className="headerNav">
                <Link to='/'>⌂ Home</Link> |
                <Link to='/proyects'>Proyects</Link> |
                <Link to='/resume'>Resume</Link> |
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/proyects' element={<Proyects />} />
                <Route path='/resume' element={<Resume />} />
            </Routes>
        </Router>
    )
}







