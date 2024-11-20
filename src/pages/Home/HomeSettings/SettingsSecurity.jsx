import { React, useState } from 'react';

const SettingsSecurity = () => {

    const questions = [
        "¿Cuál es el nombre de tu primer mascota?",
        "¿En qué ciudad naciste?",
        "¿Cuál es el nombre de tu mejor amigo de la infancia?",
        "¿Cuál es el nombre de tu profesor favorito?",
        "¿Cuál es el nombre de tu personaje favorito de infancia?",
        "¿Cuál es tu color favorito?",
        "¿Cuál es el lugar de vacaciones favorito de tu familia?"
    ];

    const [selectedQuestions, setSelectedQuestions] = useState(["", "", ""]);

    const handleQuestionChange = (index, value) => {
        setSelectedQuestions(prev => {
            const newQuestions = [...prev];
            newQuestions[index] = value;
            return newQuestions;
        });
    };

    return (
        <>
            <div className="text-center">
                <h1>Seguridad</h1>
                <p className="text-muted">Configura y protege tu cuenta</p>
            </div>

            <form>
                <div className="bg-body-tertiary rounded px-2 py-3 mb-3">

                    <div className="text-center">
                        <h3 className="mb-3 mb-md-1">Autenticación de Dos Factores</h3>
                        <p className="d-none d-md-block">Protege tu cuenta añadiendo una capa extra de seguridad mediante la autenticación de dos factores.</p>
                        <hr />
                    </div>

                    <div className="form-check form-switch mb-3">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="enable2FA"
                        />
                        <label className="form-check-label" htmlFor="enable2FA">
                            Habilitar Autenticación de Dos Factores
                        </label>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="authMethod" className="form-label">Método de Autenticación favorito</label>
                        <select
                            id="authMethod"
                            className="form-select"
                            required
                        >
                            <option value="">Selecciona un método</option>
                            <option value="sms">SMS</option>
                            <option value="email">Correo Electrónico</option>
                        </select>
                    </div>

                </div>
                <div className="bg-body-tertiary rounded px-2 py-3 mb-3">

                    <div className="text-center">
                        <h3 className="mb-3 mb-md-1">Recuperación de Contraseña</h3>
                        <p className="d-none d-md-block">Recupera el acceso a tu cuenta de manera segura si has olvidado tu contraseña.</p>
                        <hr />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="recoveryMethod" className="form-label">Método de Recuperación Favorito</label>
                        <select
                            id="recoveryMethod"
                            className="form-select"
                            required
                        >
                            <option value="">Selecciona un método</option>
                            <option value="email">Correo Electrónico</option>
                            <option value="sms">SMS</option>
                        </select>
                    </div>

                </div >

                <div className="bg-body-tertiary rounded px-2 py-3 mb-3">

                    <div className="text-center">
                        <h3 className="mb-3 mb-md-1">Preguntas de Recuperación</h3>
                        <p className="d-none d-md-block m-0">Configura preguntas de seguridad para recuperar tu cuenta en caso de olvidar tu contraseña.</p>
                        <p className="d-none d-md-block">Asegúrese de elegir respuestas que solo usted pueda recordar.</p>
                        <hr />
                    </div>

                    {Array.from({ length: 3 }).map((_, i) => (
                        <div className="mb-3" key={i}>
                            <label htmlFor={`recoveryQuestion${i + 1}`} className="form-label">
                                Selecciona una pregunta de recuperación
                            </label>
                            <select
                                id={`recoveryQuestion${i + 1}`}
                                className="form-select mb-2"
                                value={selectedQuestions[i]}
                                onChange={(e) => handleQuestionChange(i, e.target.value)}
                                required
                            >
                                <option value="" disabled>Selecciona una pregunta</option>
                                {questions.map((question, index) => (
                                    <option key={index} value={question}>{question}</option>
                                ))}
                            </select>
                            <input type="text" className="form-control" placeholder="Tu respuesta" required />
                        </div>
                    ))}

                </div>
            </form >

            <button type="submit" className="btn btn-primary w-100">
                <span>Guardar Cambios</span>
                <i className="bi bi-save ms-2"></i>
            </button>
        </ >
    );
};

export default SettingsSecurity;
