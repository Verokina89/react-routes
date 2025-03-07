import {   NavLink } from "react-router-dom";

const HeaderNav = () => {
    
    return (
        <nav className="headerNav">
            <NavLink to='/' className={({isActive}) => isActive ? "active" : ""} >🏠 Home</NavLink> |
            <NavLink to='/projects' className={({isActive}) => isActive ? "active" : ""}> 🚀 Proyectos</NavLink> |
            <NavLink to='/resume' className={({isActive}) => isActive ? "active" : ""}> 👩‍💻 Resumen Profesional</NavLink> |
            <NavLink to='/contact' className={({isActive}) => isActive ? "active" : ""}> 📱 Contacto</NavLink>
        </nav>
    );
};

export default HeaderNav;