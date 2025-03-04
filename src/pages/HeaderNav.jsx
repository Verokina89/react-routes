import {   NavLink } from "react-router-dom";

const HeaderNav = () => {
    
    return (
        <nav className="headerNav">
            <NavLink to='/' className={({isActive}) => isActive ? "active" : ""} >⌂ Home</NavLink> |
            <NavLink to='/projects' className={({isActive}) => isActive ? "active" : ""}> Projects</NavLink> |
            <NavLink to='/resume' className={({isActive}) => isActive ? "active" : ""}> Resume Cv</NavLink> |
        </nav>
    );
};

export default HeaderNav;