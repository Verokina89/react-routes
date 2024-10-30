import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Footer from './components/Footer'

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






