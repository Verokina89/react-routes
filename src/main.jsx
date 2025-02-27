import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)

//notas: 
// (referente a linea8):los componentes <App/> tienen que ir en mayuscula para que pueda reconocerlo; porque desntro trataba una clase y las clses tienen que ir en mayuscula. 