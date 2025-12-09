import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from "react-router-dom";



const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        age: '',
        phone: ''
    });

    // Maneja el cambio de los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Maneja el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Guardamos el usuario en localStorage
        localStorage.setItem("user", JSON.stringify(formData));
        localStorage.setItem("isAuthenticated", "true"); // Ahora queda autenticado tras registrarse.
    
        alert("¡Te has registrado con éxito!");
        navigate("/Login");
    };

    return (
        <div className="plox">
            <div className="register-container">
                <h2 className="Logintext">Registro de Usuario</h2>
                <form onSubmit={handleSubmit} className="register-form">
                    <div className="left-column">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Nombre:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Ingresa tu nombre completo"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Contraseña:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Ingresa tu contraseña"
                                required
                                autoComplete="new-password"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address" className="form-label">Dirección:</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Ingresa tu dirección completa"
                                required
                            />
                        </div>
                    </div>
                    <div className="right-column">
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Correo:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="ejemplo@correo.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="age" className="form-label">Edad:</label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                placeholder="Ingresa tu edad"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone" className="form-label">Teléfono:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+56 9 XXXX XXXX"
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="register-btn">Registrarse</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
