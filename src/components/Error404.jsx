import { Link } from "react-router-dom";
import '../index.css';

const Error404 = () => {
    return (
        <div className="error-container">
            <h1 className="error-heading">Error 404</h1>
            <p className="error-message">La página que buscas no existe o ha sido movida.</p>

            <Link to="/" className="error-button">
                Volver a Inicio
            </Link>
        </div>
    );
};

export default Error404;
