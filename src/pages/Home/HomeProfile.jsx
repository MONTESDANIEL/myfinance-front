import React, { useState } from 'react';
import { useUser } from '@context/UserContext';
import { updateUserData } from '@api/UserApi'; // Asegúrate de que esta función esté correctamente implementada
import FormField from '@components/FormField'; // Asegúrate de tener este componente

const HomeProfile = () => {
    const { user } = useUser();
    const [isEditing, setIsEditing] = useState(false); // Estado para controlar si estamos editando
    const [editedUser, setEditedUser] = useState({
        id: user?.id || '',
        idType: user?.idType || "",
        name: user?.name || '',
        email: user?.email || '',
        phoneNumber: String(user?.phoneNumber) || '',
        birthDate: user?.birthDate || '',
        password: user?.password || '', // Campo de contraseña vacío
    });
    const [errors, setErrors] = useState({}); // Estado para los errores de validación

    const handleEditClick = () => {
        setIsEditing(true); // Activa el modo de edición
    };

    const validateFields = () => {
        const validationErrors = {};

        // Validación de email
        if (!editedUser.email.trim()) {
            validationErrors.email = 'El correo electrónico es obligatorio.';
        } else if (!/\S+@\S+\.\S+/.test(editedUser.email)) {
            validationErrors.email = 'El correo electrónico no es válido.';
        }

        // Validación de teléfono
        if (!editedUser.phoneNumber.trim()) {
            validationErrors.phoneNumber = 'El número de teléfono es obligatorio.';
        } else if (!/^\d{10}$/.test(editedUser.phoneNumber)) {
            validationErrors.phoneNumber = 'El número de teléfono debe tener 10 dígitos.';
        }

        return validationErrors;
    };

    const handleSaveClick = async (e) => {
        e.preventDefault();
        setErrors({}); // Limpia los errores previos

        const validationErrors = validateFields(); // Realiza la validación

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors); // Si hay errores, los seteamos en el estado
            return;
        }

        try {
            // Si la contraseña está vacía, no la incluyes en la solicitud
            const userData = { ...editedUser };
            if (userData.password === '') {
                delete userData.password; // Elimina la contraseña si está vacía
            }
            // Llama a la API para actualizar los datos del usuario
            await updateUserData(userData);
            setIsEditing(false); // Después de guardar, desactiva el modo de edición
        } catch (err) {
            setErrors({ submit: 'Error al guardar los datos, por favor intente nuevamente.' });
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setEditedUser(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    return (
        <div className="container">
            <div className="bg-dark-subtle rounded p-3">
                <div className="text-center">
                    <h1 className="text-center mb-3">Información del Usuario</h1>
                    <p className="text-muted text-center">Visualiza y gestiona la información del usuario, realizando ediciones según sea necesario.</p>
                    <hr />
                </div>

                <main className="container-fluid rounded p-3 bg-body-tertiary">
                    <form>
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <FormField
                                    label="Nombre completo"
                                    id="name"
                                    placeholder="Ingresa tu nombre completo"
                                    value={editedUser.name}
                                    onChange={handleChange}
                                    disable={true} // Deshabilitar cuando no estamos en modo de edición
                                />
                                {errors.name && <small className="text-danger">{errors.name}</small>}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <FormField
                                    label="Tipo de identificación"
                                    id="idType"
                                    placeholder="Ingresa tu tipo de identificación"
                                    value={editedUser.idType}
                                    onChange={handleChange}
                                    disable={true} // Este campo siempre estará deshabilitado
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <FormField
                                    label="Número de identificación"
                                    id="id"
                                    placeholder="Ingresa tu número de identificación"
                                    value={editedUser.id}
                                    onChange={handleChange}
                                    disable={true} // Este campo siempre estará deshabilitado
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <FormField
                                    label="Correo electrónico"
                                    id="email"
                                    placeholder="Ingresa tu correo electrónico"
                                    value={editedUser.email}
                                    onChange={handleChange}
                                    disable={!isEditing} // Deshabilitar cuando no estamos en modo de edición
                                />
                                {errors.email && <small className="text-danger">{errors.email}</small>}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <FormField
                                    label="Número de teléfono"
                                    type="text"
                                    id="phoneNumber"
                                    placeholder="Ingresa tu número de teléfono"
                                    value={editedUser.phoneNumber}
                                    onChange={handleChange}
                                    disable={!isEditing} // Deshabilitar cuando no estamos en modo de edición
                                />
                                {errors.phoneNumber && <small className="text-danger">{errors.phoneNumber}</small>}
                            </div>
                            <div className="col-md-6 mb-3">
                                <FormField
                                    label="Fecha de nacimiento"
                                    type="date"
                                    id="birthDate"
                                    value={editedUser.birthDate}
                                    onChange={handleChange}
                                    disable={true} // Este campo siempre estará deshabilitado
                                />
                            </div>
                        </div>

                        {errors.submit && <div className="alert alert-danger mt-2">{errors.submit}</div>}

                        <div className="mt-4 d-flex justify-content-end">
                            {isEditing ? (
                                <button type="button" className="btn btn-primary me-2" onClick={handleSaveClick}>
                                    <i className="bi bi-save"></i> Guardar
                                </button>
                            ) : (
                                <button type="button" className="btn btn-warning me-2" onClick={handleEditClick}>
                                    <i className="bi bi-pencil-square"></i> Editar
                                </button>
                            )}
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default HomeProfile;
