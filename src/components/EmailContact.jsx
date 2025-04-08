import React, { useState } from 'react';

const EmailContact = () => {
    //el stado que guarda los datos del formulario
    const [formData, setFormData] = useState({
        email:'',
        subject: '',
        message: ''
    });

    //funcion para manejar cambio en los campos del formulario
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    //maneja el envio del formulario
    const handleSubmit = (e) => {
        e.preventDefault ();
        //posible integracion de api o servicio para envio de correos
        console.log("Datos del formulario", formData);
        //limpia el formulario despues del envio
        setFormData({ email: '', subject: '', message: '' });
    };
    return(
        <div className='emailContactContainer'>
            <h2>Enviame un correo</h2>
            <form onSubmit={handleSubmit} className='emailContactForm'>
                <input 
                 type='email' 
                 name='email' 
                 placeholder='Tu correo electrónico' 
                 value={formData.email}
                 onChange={handleChange}
                 required
                />

                <input 
                 type="text"
                 name='subject'
                 placeholder='Asunto'
                 value={FormData.subject}
                 onChange={handleChange} 
                 required 
                />

                <textarea 
                 name='message' 
                 placeholder='Escribe tu mensaje aquí' 
                 value={formData.message}
                 onChange={handleChange}
                 required
                />

                <button type='submit'>Enviar email</button>
            </form>
        </div>
    );
};

export default EmailContact;