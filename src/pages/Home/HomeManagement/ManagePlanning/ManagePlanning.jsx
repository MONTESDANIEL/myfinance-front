import React from 'react';

import PlanningCalendar from './PlanningCalendar/PlanningCalendar';
import PlanningGoals from './PlanningGoals/PlanningGoals';


const ManagePlanning = () => {

    return (
        <>
            <div className="text-center">
                <h1>Planificación</h1>
                <p className="text-muted">Organiza tus eventos financieros y define tus objetivos para un mejor control.</p>
            </div>

            <div className="bg-body-tertiary rounded p-3 mb-3">
                <div className="text-center">
                    <h3 className="mb-md-1">Calendario de planificación</h3>
                    <p className="text-muted d-none d-md-block">Consulta todos tus eventos financieros y sus fechas importantes.</p>
                    <hr />
                </div>
                <PlanningCalendar />
            </div>

            <div className="container-fluid rounded p-2 bg-body-tertiary">
                <div className="text-center">
                    <h3 className="mb-md-1">Metas financieras</h3>
                    <p className="text-muted d-none d-md-block">Establece y realiza un seguimiento de tus objetivos financieros.</p>
                    <hr />
                </div>
                <PlanningGoals />
            </div>
        </>
    );
};

export default ManagePlanning;