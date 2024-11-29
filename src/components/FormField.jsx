const FormField = ({ label, type = "text", id, placeholder, required, value, onChange }) => (
    <div>
        <label htmlFor={id} className="form-label">
            {label}
        </label>
        <input
            type={type}
            className="form-control"
            id={id}
            placeholder={placeholder}
            required={required}
            value={value} // Valor controlado
            onChange={onChange} // Función que actualiza el estado
        />
    </div>
);

export default FormField;
