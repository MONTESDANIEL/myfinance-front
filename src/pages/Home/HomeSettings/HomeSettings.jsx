import React from 'react';

import SettingsSecurity from './SettingsSecurity'
import SettingsCustomization from './SettingsCustomization'
import SettingsFinancial from './SettingsFinancial'

const HomeProfile = () => {
    return (
        <div className="container-fluid">
            <div className="d-lg-none navbar container-fluid justify-content-center">
                <ul
                    className="nav nav-tabs justify-content-center"
                    id="v-pills-tab"
                    role="tablist">
                    <li className="nav-item">
                        <button
                            className="nav-link active text-secondary"
                            id="v-pills-security-tab-i"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-security"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-security"
                            aria-selected="true">
                            <i className="bi bi-shield-lock"></i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className="nav-link text-secondary"
                            id="v-pills-customization-tab-i"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-customization"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-customization"
                            aria-selected="false">
                            <i className="bi bi-palette"></i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className="nav-link text-secondary"
                            id="v-pills-financial-tab-i"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-financial"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-financial"
                            aria-selected="false">
                            <i className="bi bi-calculator"></i>
                        </button>
                    </li>
                </ul>
            </div>

            <div className="d-none d-lg-block">
                <ul
                    className="nav nav-tabs justify-content-center"
                    id="v-pills-tab"
                    role="tablist">
                    <li className="nav-item">
                        <button
                            className="nav-link active text-secondary"
                            id="v-pills-security-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-security"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-security"
                            aria-selected="true">
                            <i className="bi bi-shield-lock"> Seguridad</i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className="nav-link text-secondary"
                            id="v-pills-customization-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-customization"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-customization"
                            aria-selected="false">
                            <i className="bi bi-palette"> Personalización</i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className="nav-link text-secondary"
                            id="v-pills-financial-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-financial"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-financial"
                            aria-selected="false">
                            <i className="bi bi-calculator"> Financiero</i>
                        </button>
                    </li>
                </ul>
            </div>

            <div className="tab-content" id="v-pills-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="v-pills-security"
                    role="tabpanel"
                    aria-labelledby="v-pills-security-tab"
                    tabIndex="0">
                    <div className="container p-3">
                        <SettingsSecurity></SettingsSecurity>
                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="v-pills-customization"
                    role="tabpanel"
                    aria-labelledby="v-pills-customization-tab"
                    tabIndex="0">
                    <div className="container p-3">
                        <SettingsCustomization></SettingsCustomization>
                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="v-pills-financial"
                    role="tabpanel"
                    aria-labelledby="v-pills-financial-tab"
                    tabIndex="0">
                    <div className="container p-3">
                        <SettingsFinancial></SettingsFinancial>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeProfile;