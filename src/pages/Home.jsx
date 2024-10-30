import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='bodyHome'>
            <nav className='navHome'>
                <ul>
                    <li><Link to='/proyects'>Proyects</Link></li>
                    <li><Link to='/resume'>Resume Cv</Link></li>
                </ul>
            </nav>
            <h1>¡Bienvenidos!</h1>
            <p>Os presento mi primer Portafolio como Desarroladora Web con React</p>
        </div>
    )
}
export default Home;