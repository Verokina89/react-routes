import React from 'react';
import fotoCarnet from '../assets/img/fotocarnetPoloRojo025.png'
// import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='bodyHome'>
                <img src={fotoCarnet} alt="fotoCarnet" />
                <h1>¡Hola! 👋🏼, Soy Veronica Isabel</h1>
                <h2>Full Stack Developer & Corporate Journalist </h2>
                {/* <nav className='navHome'>
                    <ul>
                        <li><Link to='/proyects'>Proyects</Link></li>
                        <li><Link to='/resume'>Resume Cv</Link></li>
                    </ul>
                </nav> */}
            </div>
            {/* <img src="" alt="" /> */}
        </>
    )
}
export default Home;