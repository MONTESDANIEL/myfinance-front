// validationUtils.js
export const validateFields = (fields) => {
    let errors = {};

    // Validar Nombre si se pasa
    if (fields.name && !fields.name.trim()) {
        errors.name = 'El nombre completo es obligatorio.';
    }

    // Validar Número de identificación si se pasa
    if (fields.id && !fields.id.trim()) {
        errors.id = 'El número de identificación es obligatorio.';
    } else if (fields.id && (fields.id.length < 5 || !/^\d+$/.test(fields.id))) {
        errors.id = 'El número de identificación debe ser un número válido y tener al menos 5 cifras.';
    }

    // Validar Correo electrónico si se pasa
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (fields.email && !fields.email.trim()) {
        errors.email = 'El correo electrónico es obligatorio.';
    } else if (fields.email && !emailPattern.test(fields.email)) {
        errors.email = 'El correo electrónico no es válido.';
    }

    // Validar Contraseña si se pasa
    if (fields.password && !fields.password.trim()) {
        errors.password = 'La contraseña es obligatoria.';
    } else if (fields.password && fields.password.length < 6) {
        errors.password = 'La contraseña debe tener al menos 6 caracteres.';
    }

    // Validar Confirmar contraseña si se pasa
    if (fields.confirmPassword && !fields.confirmPassword.trim()) {
        errors.confirmPassword = 'Debes confirmar la contraseña.';
    } else if (fields.confirmPassword && fields.confirmPassword !== fields.password) {
        errors.confirmPassword = 'Las contraseñas no coinciden.';
    }

    // Validar Teléfono si se pasa
    if (fields.phoneNumber && !fields.phoneNumber.trim()) {
        errors.phoneNumber = 'El número de teléfono es obligatorio.';
    } else if (fields.phoneNumber && !/^\d{10}$/.test(fields.phoneNumber)) {
        errors.phoneNumber = 'El número de teléfono debe tener 10 dígitos.';
    }

    // Validar Fecha de nacimiento si se pasa
    if (fields.birthDate && !fields.birthDate.trim()) {
        errors.birthDate = 'La fecha de nacimiento es obligatoria.';
    }

    return errors;
};
