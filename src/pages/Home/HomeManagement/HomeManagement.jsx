import { useEffect, useState } from 'react';
import ManageMovements from './ManageMovements';
import ManagePlanning from './ManagePlanning/ManagePlanning';
import ManageReports from './ManageReports';
import ManageDue from './ManageDue';

const HomeManagement = () => {
    // Recupera la pestaña activa del localStorage o establece 'movements' como valor por defecto
    const [activeTab, setActiveTab] = useState(() => {
        return localStorage.getItem('activeTabManagement') || 'movements'; // Cambia 'home' a 'movements' para este contexto
    });

    // Almacena la pestaña activa en localStorage cada vez que cambia
    useEffect(() => {
        localStorage.setItem('activeTabManagement', activeTab);
    }, [activeTab]);

    const handleTabClick = (tab) => {
        setActiveTab(tab); // Actualiza la pestaña activa
    };

    return (
        <div className="container-fluid">
            <div className="d-lg-none navbar container-fluid justify-content-center">
                <ul className="nav nav-tabs justify-content-center" id="v-pills-tab" role="tablist">
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'movements' ? 'active' : ''} text-secondary`}
                            id="v-pills-movements-tab-i"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-movements"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-movements"
                            aria-selected={activeTab === 'movements'}
                            onClick={() => handleTabClick('movements')}>
                            <i className="bi bi-arrow-left-right"></i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'planning' ? 'active' : ''} text-secondary`}
                            id="v-pills-planning-tab-i"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-planning"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-planning"
                            aria-selected={activeTab === 'planning'}
                            onClick={() => handleTabClick('planning')}>
                            <i className="bi bi-calendar-event"></i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'reports' ? 'active' : ''} text-secondary`}
                            id="v-pills-reports-tab-i"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-reports"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-reports"
                            aria-selected={activeTab === 'reports'}
                            onClick={() => handleTabClick('reports')}>
                            <i className="bi bi-file-earmark-text"></i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'due' ? 'active' : ''} text-secondary`}
                            id="v-pills-due-tab-i"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-due"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-due"
                            aria-selected={activeTab === 'due'}
                            onClick={() => handleTabClick('due')}>
                            <i className="bi bi-receipt"></i>
                        </button>
                    </li>
                </ul>
            </div>

            <div className="d-none d-lg-block">
                <ul className="nav nav-tabs justify-content-center" id="v-pills-tab" role="tablist">
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'movements' ? 'active' : ''} text-secondary`}
                            id="v-pills-movements-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-movements"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-movements"
                            aria-selected={activeTab === 'movements'}
                            onClick={() => handleTabClick('movements')}>
                            <i className="bi bi-arrow-left-right">
                                <span className='ms-2'>Movimientos</span>
                            </i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'planning' ? 'active' : ''} text-secondary`}
                            id="v-pills-planning-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-planning"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-planning"
                            aria-selected={activeTab === 'planning'}
                            onClick={() => handleTabClick('planning')}>
                            <i className="bi bi-calendar-event">
                                <span className='ms-2'>Planificación financiera</span>
                            </i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'reports' ? 'active' : ''} text-secondary`}
                            id="v-pills-reports-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-reports"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-reports"
                            aria-selected={activeTab === 'reports'}
                            onClick={() => handleTabClick('reports')}>
                            <i className="bi bi-file-earmark-text">
                                <span className='ms-2'>Reportes</span>
                            </i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'due' ? 'active' : ''} text-secondary`}
                            id="v-pills-due-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-due"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-due"
                            aria-selected={activeTab === 'due'}
                            onClick={() => handleTabClick('due')}>
                            <i className="bi bi-receipt">
                                <span className='ms-2'>Control de deudas</span>
                            </i>
                        </button>
                    </li>
                </ul>
            </div>

            <div className="tab-content container-fluid py-3" id="v-pills-tabContent">
                <div className={`tab-pane fade ${activeTab === 'movements' ? 'show active' : ''}`} id="v-pills-movements" role="tabpanel" aria-labelledby="v-pills-movements-tab" tabIndex="0">
                    <div className="container bg-dark-subtle rounded p-3">
                        <ManageMovements />
                    </div>
                </div>
                <div className={`tab-pane fade ${activeTab === 'planning' ? 'show active' : ''}`} id="v-pills-planning" role="tabpanel" aria-labelledby="v-pills-planning-tab" tabIndex="0">
                    <div className="container bg-dark-subtle rounded p-3">
                        <ManagePlanning />
                    </div>
                </div>
                <div className={`tab-pane fade ${activeTab === 'reports' ? 'show active' : ''}`} id="v-pills-reports" role="tabpanel" aria-labelledby="v-pills-reports-tab" tabIndex="0">
                    <div className="container bg-dark-subtle rounded p-3">
                        <ManageReports />
                    </div>
                </div>
                <div className={`tab-pane fade ${activeTab === 'due' ? 'show active' : ''}`} id="v-pills-due" role="tabpanel" aria-labelledby="v-pills-due-tab" tabIndex="0">
                    <div className="container bg-dark-subtle rounded p-3">
                        <ManageDue />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeManagement;
