import { React, useState } from 'react';
import { useUser } from "@context/UserContext";
import { updateUserSettings, resetToDefaultSettings } from '@api/SettingUserApi';

const SettingsSecurity = () => {

    const { settings } = useUser();

    const [securitySettings, setSecuritySettings] = useState({
        twoFactorAuth: settings.twoFactorAuth,
        preferredAuthMethod: settings.preferredAuthMethod,
        preferredPasswordRecovery: settings.preferredPasswordRecovery,
    });

    const handleChange = (key, value) => {
        setSecuritySettings((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const handleSaveSettings = async (e) => {
        e.preventDefault();

        try {
            await updateUserSettings(securitySettings);
            window.location.reload();
        } catch (error) {
            console.error("Ocurrió un error inesperado", error);
        }
    }

    const handleRestartSettings = async (e) => {
        e.preventDefault();

        try {
            await resetToDefaultSettings();
            window.location.reload();
        } catch (error) {
            console.error("Ocurrió un error inesperado", error);
        }
    }

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
                            checked={securitySettings.twoFactorAuth}
                            id="enable2FA"
                            onChange={(e) => handleChange('twoFactorAuth', e.target.checked)}
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
                            value={securitySettings.preferredAuthMethod}
                            onChange={(e) => handleChange('preferredAuthMethod', e.target.value)}
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
                            value={securitySettings.preferredPasswordRecovery}
                            onChange={(e) => handleChange('preferredPasswordRecovery', e.target.value)}
                        >
                            <option value="">Selecciona un método</option>
                            <option value="email">Correo Electrónico</option>
                            <option value="sms">SMS</option>
                        </select>
                    </div>

                </div >
            </form >

            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-4 my-1">
                    <button type="submit" className="btn btn-primary w-100" onClick={(e) => handleSaveSettings(e)}>
                        <span>Guardar cambios</span>
                        <i class="bi bi-save ms-2"></i>
                    </button>
                </div>
                <div className="col-md-4 my-1">
                    <button type="submit" className="btn btn-warning w-100" onClick={(e) => handleRestartSettings(e)}>
                        <span>Restablecer valores</span>
                        <i class="bi bi-arrow-clockwise ms-2"></i>
                    </button>
                </div>
            </div>
        </ >
    );
};

export default SettingsSecurity;
