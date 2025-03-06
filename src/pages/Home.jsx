import React from 'react'
// import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='bodyHome'>
                <h1>¡Hola! 👋🏼, Soy Veronica Isabel</h1>
                <img src="src/img/fotoCarnetFondoNegro.png" alt="fotoTipoCarnet" />
                <h2>Full Stack Developer & Corporate Journalist </h2>
                {/* <nav className='navHome'>
                    <ul>
                        <li><Link to='/proyects'>Proyects</Link></li>
                        <li><Link to='/resume'>Resume Cv</Link></li>
                    </ul>
                </nav> */}
            </div>
        </>
    )
}
export default Home;