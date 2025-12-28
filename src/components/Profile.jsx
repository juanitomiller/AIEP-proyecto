import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        age: '',
        address: '',
        phone: ''
    });
    
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        const authStatus = localStorage.getItem('isAuthenticated') === 'true';

        if (storedUser && authStatus) {
            setUserData(storedUser);
            setIsAuthenticated(true);
        }
    }, []);

    const handleEdit = () => {
        if (isEditing) {
            // Guardar cambios
            localStorage.setItem('user', JSON.stringify(userData));
        }
        setIsEditing(!isEditing);
    };

    if (!isAuthenticated) {
        return (
            <div className="profile-container">
                <h2>No tienes acceso al perfil</h2>
                <p>Por favor, inicia sesión para ver tu perfil.</p>
            </div>
        );
    }

    return (
        <div className="profile-container">
            <div className="profile-header">
                <span className="profile-icon">👤</span>
                <h2>Mi Perfil</h2>
            </div>
            <div className="profile-info">
                <div className="profile-item">
                    <label>Nombre:</label>
                    {isEditing ? (
                        <input
                            type="text"
                            value={userData.name}
                            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                        />
                    ) : (
                        <span>{userData.name}</span>
                    )}
                </div>
                <div className="profile-item">
                    <label>Correo Electrónico:</label>
                    <span>{userData.email}</span>
                </div>
                <div className="profile-item">
                    <label>Edad:</label>
                    {isEditing ? (
                        <input
                            type="number"
                            value={userData.age}
                            onChange={(e) => setUserData({ ...userData, age: e.target.value })}
                        />
                    ) : (
                        <span>{userData.age}</span>
                    )}
                </div>
                <div className="profile-item">
                    <label>Dirección:</label>
                    {isEditing ? (
                        <input
                            type="text"
                            value={userData.address}
                            onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                        />
                    ) : (
                        <span>{userData.address}</span>
                    )}
                </div>
                <div className="profile-item">
                    <label>Teléfono:</label>
                    {isEditing ? (
                        <input
                            type="tel"
                            value={userData.phone}
                            onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                        />
                    ) : (
                        <span>{userData.phone}</span>
                    )}
                </div>
            </div>
            <button className="edit-button" onClick={handleEdit}>
                {isEditing ? 'Guardar cambios' : 'Editar datos'}
            </button>
        </div>
    );
};

export default Profile;

