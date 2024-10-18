export const FormField = ({ label, type, id, placeholder, required }) => (
    <div className="mb-3">
        <label htmlFor={id} className="form-label">
            {label}
        </label>
        <input
            type={type}
            className="form-control"
            id={id}
            placeholder={placeholder}
            required={required}
        />
    </div>
);