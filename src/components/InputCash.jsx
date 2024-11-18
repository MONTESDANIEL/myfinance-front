import React, { useState } from "react";

const InputCash = ({ label, value, onChange, placeholder = "0" }) => {
    const handleChange = (e) => {
        let inputValue = e.target.value;

        // Eliminar caracteres no numéricos
        inputValue = inputValue.replace(/\D/g, "");

        // Formatear el número con separadores de miles
        inputValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // Llamar a la función onChange para actualizar el estado en el componente padre
        onChange(inputValue);
    };

    return (
        <>
            <input
                type="text"
                className="form-control"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </>
    );
};

export default InputCash;
